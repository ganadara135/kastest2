import CaverExtKAS from "caver-js-ext-kas";

export const getAccountListApi = async () => {

    const accessKeyId = process.env.REACT_APP_ACCESS_KEY;
    const secretAccessKey = process.env.REACT_APP_SECRET_ACCESS_KEY;
    const chainId = process.env.REACT_APP_CHAIN_ID;
    const caver = new CaverExtKAS();
    caver.initKASAPI(chainId, accessKeyId, secretAccessKey)
    const query = {
        size: 10,   
    }
    const result = await caver.kas.wallet.getAccountList(query)
    console.log("async call dispatch : ");
    console.log(result.items);

    return result.items;
}

