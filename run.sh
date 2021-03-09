kill -9 $(cat app.pid) || true
rm -rf app.pid
nohup live-server --port=80 --entry-file=index.html . >/dev/null 2>&1 &
echo "$!" > app.pid
