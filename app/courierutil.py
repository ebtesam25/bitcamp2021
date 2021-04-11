from trycourier import Courier


def sendmessage(text, receiver):

    client = Courier(auth_token="pk_prod_REDACTED")

    resp = client.send(
        event="courier-quickstart",
        recipient=receiver,
        data={
        "message": text
        }
    )

    print(resp['messageId'])