import logging
from google.appengine.ext import webapp
from google.appengine.ext.webapp.util import run_wsgi_app
from google.appengine.ext.webapp import RequestHandler
import json
from json import loads
from urllib2 import urlopen
from datetime import date

import braintree

braintree.Configuration.configure(
    braintree.Environment.Sandbox,
    'kptk4xhphjzwm38x',
    'vsm3nrfsz89r4x38',
    '0d6e2c6ab8a3daca53b2a9ddf92847a1'
)


class ClientToken(RequestHandler):
    def get(self):
        customer = {"customer_id": 'a_customer_id'}
        logging.info('Token for %s', customer)
        self.response.out.write(braintree.ClientToken.generate(customer))


class Purchases(RequestHandler):
    def post(self):
        nonce = request.form["payment_method_nonce"]
        # Use payment method nonce here...

        result = braintree.Transaction.sale({
            "amount": "10.00",
            "payment_method_nonce": "nonce-from-the-client"
        })

        logging.info('Payment for %s result is %s', nonce, result)
        self.response.out.write(result)

application = webapp.WSGIApplication([('/client_token', ClientToken),
                                      ('/purchases', Purchases)
                                     ], debug=True)


def main():
    run_wsgi_app(application)

if __name__ == '__main__':
    main()
