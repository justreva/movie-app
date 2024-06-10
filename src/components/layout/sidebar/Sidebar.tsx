import { FC, useState } from "react"
import { Layout} from 'antd';
import { HomeOutlined } from "@ant-design/icons";
const Sidebar: FC = () => {
	const [collapsed, setCollapse] = useState(false);

	return (
		<Layout.Sider className="layout__sidebar" trigger={null} collapsible collapsed={collapsed}>
		<div className="sidebar__logo" onClick={() => setCollapse(!collapsed)}>
			<img src="../../../../public/logo.svg" alt="logo" />
			<h1>{collapsed ? "" : "SVault"}</h1>
		</div>

		<ul className="sidebar-list">
			<li className="sidebar-list__element">
			<HomeOutlined />
			<h1>Home</h1>
			</li>
		</ul>

		</Layout.Sider>
	)
}

export default Sidebar