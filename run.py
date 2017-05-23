#!/usr/bin/python
import logging
import argparse
from server import LinscheidServer

logger = logging.getLogger(__name__)


def parse_args():
    arg_parser = argparse.ArgumentParser()
    arg_parser.add_argument('-p', '--port', default=8000, type=int, help='port')
    arg_parser.add_argument('-l', '--log-level', default='INFO', help='log level')
    arg_parser.add_argument('--debug', action='store_true', help='run in debug mode')

    args = arg_parser.parse_args()
    return args.port, args.log_level, args.debug


def main(port):
    server = LinscheidServer(port=port)
    server.start()


if __name__ == '__main__':
    port, log_level, debug = parse_args()

    if debug:
        log_level = 'DEBUG'

    logging.basicConfig(level=log_level)

    main(port)
