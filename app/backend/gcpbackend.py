import os
import pymongo
import json
import random
# import psycopg2
import hashlib
import time

from hashlib import sha256







def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()

    
    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["matchmaker"]


    retjson = {}

    action = request_json['action']

    if action == "getuserdata":
        col = db.users
        for x in col.find():
            if int(x['id']) == int(request_json['userid']):
                name = x['name']
                age = x['age']
                gender = x['gender']
                sexuality = x['sexuality']


                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['age'] = age
                retjson['gender'] = gender
                retjson['sexuality'] = sexuality
                
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)


    if action == "updateuserdata":
        col = db.users
        for x in col.find():
            if int(x['id']) == int(request_json['id']):
                if 'name' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"name":request_json['name']}})
                if 'gender' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"gender":request_json['gender']}})
                if 'sexuality' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"sexuality":request_json['sexuality']}})
                    
                # status = x['status']
                # diet = x['diet']
                # allergy = x['allergy']

                retjson = {}

                # retjson['dish'] = userid
                retjson['responsestatus'] = "success"
                # retjson['status'] = status
                # retjson['diet'] = diet
                # retjson['allergy'] = allergy
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == "getallmemes":
        col = db.memes
        tables = []
        for x in col.find():
            table = {}

            table['memeid'] = x['id']
            table['url'] = x['url']
            table['userid'] = x['userid']
            table['text'] = x['text']

            tables.append(table)

            


        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "success"
        retjson['tables'] = tables
        

        return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == "register" :
        maxid = 1
        col = db.users
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        payload["age"] = request_json['age']
        payload["gender"] = request_json['gender']
        payload["sexuality"] = request_json['sexuality']
        payload["religion"] = request_json['religion']
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['userid'] = id

        return json.dumps(retjson)


    if action == "login":
        col = db.users
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                userid = x['id']
                name = x['name']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['userid'] = userid
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['userid'] = "-1"

        return json.dumps(retjson)



    if action == "addmatch" :
        maxid = 1
        col = db.matches
        for x in col.find():
            id = x["id"]
            if x["userid1"] == request_json["userid2"] and x["userid2"] == request_json["userid1"]:
                col.update_one({"id": x['id']}, {"$set":{"mutual":"yes"}})

                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "successfully modified"
                retjson['id'] = id

                return json.dumps(retjson)

            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']

        payload["userid1"] = request_json['userid1']
        payload["userid2"] = request_json['userid2']
        
        payload["mutual"] = "no"
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)




    if action == "addscore" :
        maxid = 1
        col = db.scores
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['userid']
        payload["score"] = request_json['score']
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)


    if action == "getmyscore":
        col = db.scores
        for x in col.find():
            if x['userid'] == request_json['userid']:
                score = x['score']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['score'] = score

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == "getallscores":
        col = db.scores
        scores = []
        for x in col.find():
            entry = {}
            entry['userid'] = x['userid']
            entry['score'] = x['score']
            scores.append(entry)
            
        # retjson['dish'] = userid
        retjson['status'] = "success"
        retjson['scores'] = scores

        return json.dumps(retjson)
        retjson = {}


    if action == "addmeme":
        maxid = 1
        col = db.memes
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['userid']
        payload["url"] = request_json['url']
        payload["text"] = request_json['text']
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['id'] = id

        return json.dumps(retjson)



    if action == "getrandommeme":
        col = db.memes

        maxid = 0
        for x in col.find():
            maxid = int(x["id"])
        
        index = random.randint(1, maxid)

        for x in col.find():
            if x['id'] == str(index):
                sid = x['id']
                url = x['url']
                userid = x['userid']
                retjson = {}

                # retjson['dish'] = userid
                retjson['url'] = url
                retjson['id'] = sid
                retjson['userid'] = userid

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)    

    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
