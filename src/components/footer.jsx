function Footer(){
    return(
    <>
    <div className="bg-slate-900 px-4 pt-4 text-cyan-50 grid grid-cols-3">

        {/* Left Section */}
        <div className="pl-6 justify-center">
          <a href=""><img className="w-40 h-40 justify-center" src="/src/assets/cu-logo.svg"></img></a> 
        </div>

        {/* Center Section */}
        <div className="pt-6 pr-4 justify-center">
        <h2 className="text-2xl font-semibold">Email:</h2>
            <ul>
                <li>pelekadeba@gmail.com</li>
                <li>Richard.levi@stu.cu.edu.ng</li>
                <li>Vemrinji@gmail.com</li>
            </ul>
        </div>

        {/* Right Section */}
        <div className="pt-6 pl-6 justify-center">
            <h2 className="text-2xl font-semibold">Developed By:</h2>
            <ul>
                <li>Kadeba Oluwapelumi Ayobami</li>
                <li>Richard Levi Akpeh</li>
                <li>Vem Rinji Silas</li>
            </ul>
        </div>
    </div>

    {/*Copyright section */}
    <div className="bg-slate-900 px-4 pb-6 text-cyan-50 text-center">
        <p>Copyright 2025 </p>
        <p>Developed at Covenant University, Ota, Ogun State, Nigeria</p>
    </div>
    </>
    );
}
export default Footer;