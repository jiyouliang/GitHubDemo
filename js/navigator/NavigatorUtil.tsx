import { Properties } from "csstype";

/**
 * 控制导航器切换
 *
 * @export
 * @class NavigatorUtil
 */
export default class NavigatorUtil{

    /**
     *重置到首页
     *
     * @static
     * @param {*} params
     * @memberof NavigatorUtil
     */
    static resetToHomePage(params){
        const {navigation} = params;
        // 这里的Main就是我们在AppNavigators中声明的首页导航器
        navigation.navigate('Main')
    }
}