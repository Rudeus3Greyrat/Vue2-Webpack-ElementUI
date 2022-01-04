// *查看是否为U2登录回调URL
export const checkUrlHasCodeState = () => {
    let E2 = { code: '', state: '' }
    const query = window.location.search.substring(1);
    const allQueryArr = query.split("&");

    allQueryArr.forEach((item) => {
        let pair = item.split('=')
        for (const key in E2) {
            if (pair[0] === key) {
                E2[key] = key === 'state' ? pair[1].split('#')[0] : E2[key] = pair[1]
            }
        }
    })
    if (E2.code && E2.state) {
        return E2
    }

    return false
}