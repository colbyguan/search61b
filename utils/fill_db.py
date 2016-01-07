from pymongo import MongoClient
import argparse
import scrapers

parser = argparse.ArgumentParser()
parser.add_argument('--host', action='store', dest='host', type=str)
parser.add_argument('-p', '--port', action='store', dest='port', type=int)

if __name__ == '__main__':
  args = parser.parse_args()
  host = 'localhost'
  port = 3001

  if args.port:
    port = args.port
  if args.host:
    host = args.host
  client = MongoClient(host, port)
  db = client.meteor
  db.drop_collection('links')
  links = db.links

  su15 = scrapers.search_su15()
  sp14 = scrapers.search_sp14()
  links.insert_many(su15 + sp14)
