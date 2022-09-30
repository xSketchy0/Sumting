[![Sumting](https://uploads-ssl.webflow.com/61b75f7704ba6b6a2966c019/61d45fd07a84837de04e9da8_Logo_BW-p-500.png "Sumting")](https://www.sumting.org/)

# **Node.js using (Express, node-postgres)**

Created this stack so we can try and realize whatever we have to do for [Sumting](https://www.sumting.org/).

Uses Node.js as server, Express to create API endpoints using the MVC model without the view part as of right now and node-postgres to create a connection between the local/remote PostgreSQL server and our Node.js server.

# **Setup**

### **Installation**
Installation is done using:

``` Shell
$ npm install
```

To run the server use:

``` Shell
$ npm run dev
```

### **.env**
The `.env` file consists of these variables. Rename `.env.example` to `.env` to use this in development. Write the values down without quotes.

``` javascript
EXPRESS_PORT='Express port'
PGSQL_USERNAME='Username'
PGSQL_HOST='Localhost'
PGSQL_DB='Database name'
PGSQL_PASSWORD='Password'
PGSQL_PORT='PostgreSQL port'
```

# **LISTEN/NOTIFY**

To use the `LISTEN/NOTIFY` commands we have to create a function and trigger first in the database.

## **Function**

 ``` sql

 -- This creates the function with the pg_notify command
-- It converts and sends the row as a json object.
CREATE OR REPLACE FUNCTION public.notify_event()
    RETURNS trigger
    LANGUAGE plpgsql
AS $function$
BEGIN
    PERFORM pg_notify('event', row_to_json(NEW)::text);
    RETURN NULL;
END;
$function$

```
 &nbsp;
## **Trigger**

``` sql

-- This creates the trigger. This statement adds a trigger
-- on each row of the table users and triggers when that
-- row updates, a new row gets inserted or deleted.
CREATE TRIGGER event_trigger 
AFTER INSERT OR UPDATE OR DELETE
ON public.users
FOR EACH ROW EXECUTE PROCEDURE notify_event();

```