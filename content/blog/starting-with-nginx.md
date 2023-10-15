---
title: "Starting with nginx"
author: Tarun Bhukya
topic: Tech
coverImg: abstract1.png
coverImgAlt: Cover image for the blog, "Starting with nginx"
published: true
createdAt: "2023-10-15"
---

Well we all heard about Nginx as a web server, reverse proxy, load balancer, proxy server for email communications and also know for its performance and stability. Lets start with some hands on with Nginx and will see what all it can do.

## Installing nginx
lets first install nginx by running the below command

```bash
sudo apt install nginx -y
```

once its installed, it should be automatically up and running. You can check the status by running

```bash
sudo systemctl status nginx
```

If the status is running then we all are set. If not then we may have to explictly start the service bt running

```bash
sudo systemctl start nginx
```

Now if everything is set then you can visit `localhost` and you should be able to see an nginx welcome page.

## Lets configure our first web server
After installing nginx, linux system store all the nginx files in the directory `/etc`. So lets go to `/etc/nginx` and check all the files. In those files there is one particular file which is of very interest to us i.e `nginx.conf` which has all the instructions of various configurations.

Let's do one thing. Lets take a backup of that file and let's write our own code.
For taking a backup lets run this
```bash
sudo mv nginx.conf nginx.conf.backup
```

Now lets have our own configuration.
```bash
events {

}
http {
    server {
        listen 80;
        return 200 "Hello from nginx!"
    }
}
```
Its a simple one, we just defined a http server which listens to the port 80 and when accessed it will just return `Hello from nginx!`

Before that we need to tell nginx about our new configuration and then restart nginx. First lets check for any syntax mistakes by running

```bash
sudo nginx -t
```
If there where no errors, then it should say successfull at the end. Once that is done, lets now restart our nginx by running
```bash
sudo systemctl restart nginx
```
`Note:` there are various ways to reload nginx, we will mention in further blogs about it.

Now lets refresh our `localhost` and see the response. Vola.. it shows `Hello from nginx!`

### Conclusion
See, a simple nginx server is not so hard to setup. In our next blog lets learn more about nginx and its configurations a bit deep. 