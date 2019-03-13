import LeftMenu from "../leftMenu";
import Header from "../header";
import styles from "../../css/components/layout.module.scss";
export default class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles["layout-container"]}>
                <LeftMenu {...this.props} />
                <div className="flex1">
                    <Header {...this.props} />
                    {this.props.children}
                </div>
            </div>
        )
    }
}