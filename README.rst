###################
django CMS explorer
###################

.. image:: https://raw.githubusercontent.com/divio/django-cms/develop/docs/images/try-with-aldryn.png
   :target: http://demo.django-cms.org/
   :alt: Try demo with Aldryn Cloud

This is the "Explorer" theme used for the `django CMS demo <http://demo.django-cms.org/>`_.
The purpose of this project is to provide theme developers a cookie cutter theme
project to create or migrate their own theme.

We created `django-cms-demo <https://github.com/divio/django-cms-demo>`_ in addition
to make life easier for developers for playing around with a theme. You can also use
`Aldryn Cloud <http://www.aldryn.com>`_ to skip the local setup all together.

.. image:: https://raw.githubusercontent.com/divio/django-cms-explorer/master/static/img/visuals/explorer-preview.png


************
Installation
************

Demo Project
------------

The easiest way to install this project is the
`django-cms-demo <https://github.com/divio/django-cms-demo>`_ project.
Head over to the repository and follow the instructions in the
``README.txt``.

Manual
------

* The easiest way to install django CMS manually is by using the
  `djangocms-installer <http://docs.django-cms.org/en/develop/introduction/install.html>`_.
* You can also create a project from scratch following the very helpful Django
  `tutorial <https://docs.djangoproject.com/en/1.9/intro/tutorial01/>`_.
  Followed by installing django CMS `the "hard" way
  <http://docs.django-cms.org/en/develop/how_to/install.html>`_.

#. Choose a starting installation from above.
#. Once you have created a project, copy all files from **inside** the
   django-cms-explorer project **directly** into your projects ``mysite/`` directory.
   More about the file structure is documented in our 
   `boilerplate guidelines <https://aldryn-boilerplate-bootstrap3.readthedocs.io/en/latest/structure/index.html>`_.
#. Restart your server and open your site using ``http://localhost:8000/en/``.

You are ready to create your own theme.


****************
Supported Addons
****************

This theme supports, besides the `core addons
<http://docs.django-cms.org/en/develop/how_to/install.html#other-plugins>`_, also the following:

- `aldryn-bootstrap3 <https://github.com/aldryn/aldryn-bootstrap3>`_
- `aldryn-forms <https://github.com/aldryn/aldryn-forms>`_
- `aldryn-newsblog <https://github.com/aldryn/aldryn-newsblog>`_
- `aldryn-people <https://github.com/aldryn/aldryn-people>`_
- `aldryn-events <https://github.com/aldryn/aldryn-events>`_
- `aldryn-faq <https://github.com/aldryn/aldryn-faq>`_
- `aldryn-jobs <https://github.com/aldryn/aldryn-jobs>`_
- `cmsplugin-filer <https://github.com/divio/cmsplugin-filer>`_
