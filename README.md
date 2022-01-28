# New FIX Bridge Version for Individual Traders
We created a new version(FIX Bridge) for individual traders. It's for free FOREVER!!

Download link: https://www.fintechee.com/assets/fix-api/fintecheefixbridge.7z

# How to use our FIX API trading platform individual/bridge version
Please check this page:
https://www.fintechee.com/features/fix-api-bridge/

If you are using our FIX API trading platform individual/bridge version(no matter whether it's a paid version or free version), you need to put the "json" folder in the root directory of the FIX API trading platform.

```
root
│───fixprox-6.0.jar
└───json
│   └───symbols.json
└───util.cfg
```

### Please don't change the names and the folder structure of the files.

### Please replace the "lpName" of the Json object with the specific name.

Adaptive lpName:

* b2brokerdata.cfg
* cmcdata.cfg
* scopemktdata.cfg
* exantedata.cfg
* advmktdata.cfg
* lmaxdata.cfg
* atcdata.cfg
* fxcmdata.cfg
* topfxdata.cfg
* gmidata.cfg
* swissquotedata.cfg
* tradetechdata.cfg

... More than 20

Please note, every LP(liquidity provider) has different spreads, financing interests and commissions. You need to set the parameters according to the actual conditions.

### util.cfg is the configuration file.

We will post some guide to teach you how to set up the configuration file soon.
