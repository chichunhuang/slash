

```
ExecutorService es = Executors.newFixedThreadPool(4);



for (Element e : loopable) {

            es.execute(new Runnable() {

                @Override

                public void run() {

                    // do the job here...

                }
            });

        }



        es.shutdown();

        try {

            es.awaitTermination(Long.MAX_VALUE, TimeUnit.DAYS);

        } catch (InterruptedException e) {

            logger.error("計算Allele Frequency時間超過最大等待時間");

            throw new ProbeSetException("計算Allele Frequency時間超過最大等待時間");

        }
```		