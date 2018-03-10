import unittest


if __name__ == '__main__':
    import xmlrunner
    import sys, os

    sys.path.insert(0, 'server/')

    runner = xmlrunner.XMLTestRunner(output='../test-reports/junit')
    loader = unittest.TestLoader().discover('server/server/test/', '*Test.py')

    for suite in loader:
        runner.run(suite)
