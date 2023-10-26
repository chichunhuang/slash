

Write:

```
Writer w = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(theFile), "utf8"));
w.write(text)
w.close()
```

Read:
```
BufferedReader r = new BufferedReader(new InputStreamReader(new FileInputStream(f), "utf8"));
String line = r.readline()
...
r.close()
```