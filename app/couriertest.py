from trycourier import Courier

client = Courier(auth_token="pk_prod_REDACTED")

resp = client.send(
    event="courier-quickstart",
    recipient="REDACTED",
    data={
      "favoriteAdjective": "awesomeness"
    }
)

print(resp['messageId'])
