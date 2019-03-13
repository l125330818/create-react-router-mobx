import menuData from "../../config/menuData";
import { Menu, Icon } from 'antd';
import styles from "../../css/components/layout.module.scss";
const SubMenu = Menu.SubMenu;

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTree: [],
            defaultOpenKeys:[],//选中
            defaultSelectedKeys:[],
        }
    }
    componentWillMount() {
        let data = this.handleMenuData(menuData);
        let {pathname} = location;
        let pArr = pathname.split("/");
        let defaultOpenKeys = [`/${pArr[1]}`];//路由第一级value
        let defaultSelectedKeys = [`/${pArr[1]}/${pArr[2]}`];//路由第二级value
        this.setState({
            menuTree: data,
            defaultOpenKeys,
            defaultSelectedKeys
        })
    }
    /**
     * 
     * @param {*} data 
     * @param {*} parentPath 
     * 拼接路由path。
     */
    handleMenuData(data = [], parentPath = "/") {
        return data.map(item => {
            let { code } = item;
            code = parentPath + item.path;
            const result = {
                ...item,
                code,
            };
            if (item.childList) {
                result.childList = this.handleMenuData(
                    item.childList,
                    `${parentPath}${item.path}/`,
                );
            }
            return result;
        });

    }
    handleClick = (e) => {
        this.props.history.push(`${e.key}`)
    }
    getItem = () => {
        let { menuTree } = this.state;
        return menuTree.map((item) => {
            let { childList = [] } = item;
            if (childList.length) {
                return <SubMenu
                    key={item.code}
                    title={<span>
                        <Icon type={item.icon} />
                        <span>{item.name}</span>
                    </span>}
                >
                    {
                        childList.map((sItem) => {
                            return <Menu.Item key={sItem.code}>{sItem.name}</Menu.Item>
                        })
                    }
                </SubMenu>

            }
            return <Menu.Item key={item.code}>{item.name}</Menu.Item>
        })
    }
    render() {
        let {defaultSelectedKeys,defaultOpenKeys} = this.state;
        return (
            <div className={styles["left-menu"]}>
                <div className={styles["left-menu-box"]}>
                    <div className={styles["title"]}>我是标题</div>
                </div>

                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultOpenKeys = {defaultOpenKeys}
                    defaultSelectedKeys = {defaultSelectedKeys}
                    mode="inline"
                >
                    {
                        this.getItem()
                    }
                </Menu>
            </div>
        )
    }
}