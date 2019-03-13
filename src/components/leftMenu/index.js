import menuData from "../../config/menuData";
import { Menu, Icon } from 'antd';
import styles from "../../css/components/layout.module.scss";
const SubMenu = Menu.SubMenu;

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuTree: [],
            openKeys: [],//选中
            selectedKeys: [],
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.pathname == "/") {//为了处理从没有路由重定向过来的没有menu选中情况。
            let { pathname } = nextProps.location;
            this.setKeys(pathname);
            this.pathname = pathname;
        }
    }
    componentDidMount() {
        let {pathname} = location;
        this.initData();
        this.setKeys(pathname);

    }
    /**
     * 
     * @param {*} pathname 
     * 设置menu选中的keys
     */
    setKeys(pathname) {
        let pArr = pathname.split("/");
        let openKeys = [`/${pArr[1]}`];//路由第一级value
        let selectedKeys = [`/${pArr[1]}/${pArr[2]}`];//路由第二级value
        this.setState({
            openKeys,
            selectedKeys
        });
        this.pathname = pathname;
    }
    initData() {
        let data = this.handleMenuData(menuData);
        this.pathname = location.pathname;
        this.setState({
            menuTree: data,
        })
    }
    componentWillMount() {

    }
    /**
     * 
     * @param {*} data 
     * @param {*} parentPath 
     * 拼接路由path，拼接数据。
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
        this.setState({
            selectedKeys: [e.key]
        })
        this.props.history.push(`${e.key}`)
    }
    onOpenChange = (e) => {
        this.setState({
            openKeys: e,
        })
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
        let { selectedKeys, openKeys } = this.state;
        return (
            <div className={styles["left-menu"]}>
                <div className={styles["left-menu-box"]}>
                    <div className={styles["title"]}>我是标题</div>
                </div>

                <Menu
                    onClick={this.handleClick}
                    onOpenChange={this.onOpenChange}
                    style={{ width: 256 }}
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
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