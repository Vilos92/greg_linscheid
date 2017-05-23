import logging
import os
from tornado import web, gen
from tornado.ioloop import IOLoop, PeriodicCallback
from tornado_jinja2 import Jinja2Loader

logger = logging.getLogger(__name__)


class IndexHandler(web.RequestHandler):
    @gen.coroutine
    def get(self, *args, **kwargs):
        self.render('index.html')


class LinscheidServer(web.Application):
    def __init__(self, port):
        root = os.path.dirname(__file__)

        static_dir = os.path.join(root, 'static')

        templates_dir = os.path.join(root, 'templates')
        jinja2_loader = Jinja2Loader(templates_dir)

        settings = {
                'static_path': static_dir,
                'template_loader': jinja2_loader,
                }

        handlers = [
                (r'/static/(.*)', web.StaticFileHandler, {'path': static_dir,
                    'default_filename': 'index.html'}),
                (r'/(.*)', IndexHandler)
                ]

        super(LinscheidServer, self).__init__(port=port, handlers=handlers, **settings)

        self.loop = IOLoop.instance()
        self.listen(port)

    def start(self):
        self.loop.start()
