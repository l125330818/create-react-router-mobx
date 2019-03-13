import styles from "../../css/components/layout.module.scss";
const logo = require("../../images/layout/default-logo.png");
const exit = require("../../images/layout/exit.png");
import headerData from "../../config/headerData";
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {pathname} = location;
        let pArr = pathname.split("/");
        let path = `/${pArr[1]}/${pArr[2]}`;//匹配第二级路由
        return (
            <div className={styles["header"]}>
                <div className={styles["header-title"]}>
                    <a >{headerData[path]}</a>
                </div>
                <div className={styles["header-info"]}>
                    <img src={logo} alt="" className={styles["user-logo"]} />
                    <span className={styles["user-name"]}>张哥</span>
                    <img src={exit} className={styles["exit-logo"]} alt="" />
                </div>
            </div>
        )
    }
}