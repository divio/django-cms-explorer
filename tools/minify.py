"""
Minify collected javascript files

This would ideally be moved into either the frontend building pipeline (gulp
et al.) or integrated into the building process (collectstatic or another
management command).

To minify your collected javascript files, add the following command at the
end of the Dockerfile for your project (after the `</DOCKER_BUILD>` tag):

    # minify collected javascript files
    # ---------------------------------
    RUN python tools/minify.py

"""
import os
import gzip

import rjsmin


def minify(staticfiles_path):
    for root, dirs, files in os.walk(staticfiles_path):
        for file in files:
            if not file.endswith('.js'):
                continue
            file = os.path.join(root, file)
            with open(file, 'r+') as fh:
                minified = rjsmin.jsmin(fh.read())
                fh.truncate(0)
                fh.write(minified)
            if os.path.exists(file + '.gz'):
                with gzip.open(file + '.gz', 'w') as fh:
                    fh.write(minified)


minify('/app/static_collected')
