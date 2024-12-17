import Logo from "../Logo/Logo"


const Footer = () => {
	return (
		<div className="mt-[40px] border-t border-border shadow-lg p-6 flex text-secondary justify-center items-center">
			<Logo />
			<h1 className="ml-1">- All Rights reserved</h1>
		</div>
	)
}

export default Footer