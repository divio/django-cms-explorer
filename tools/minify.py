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
        for filename in files:
            if not filename.endswith('.js'):
                continue
            filepath = os.path.join(root, filename)
            with open(filepath, 'r+') as fh:
                minified = rjsmin.jsmin(fh.read())
                fh.seek(0)
                fh.write(minified)
                fh.truncate()
            if os.path.exists(filepath + '.gz'):
                with gzip.open(filepath + '.gz', 'w') as fh:
                    fh.write(minified.encode('utf-8'))


minify('/app/static_collected')
