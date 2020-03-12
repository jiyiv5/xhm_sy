function FindProxyForURL(url, host) {
    if (host == 'junziyun3.skeo.net' || host == 'junziyun.iecat.cn' || host == 'junziyun1.iecat.cn' || host == 'junziyun2.iecat.cn') {
        return 'PROXY 117.85.166.97:8118;'
    }
    return 'DIRECT;'
}