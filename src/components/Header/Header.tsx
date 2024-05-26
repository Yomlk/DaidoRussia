import classes from './style.module.scss'

export default function Header() {
    return(
        <>
    <header>
        <div className= "container-fluid First-header">
            <div className="row header-row">
                <div className="hamburger">
                    <div className="hamburger-menu">
                        <input id="menu__toggle" type="checkbox" />
                        <label className="menu__btn" htmlFor="menu__toggle">
                         <span></span>
                        </label>

                        <ul className="menu__box">
                         <li><a className="menu__item" href="#">О компании</a></li>
                         <li><a className="menu__item" href="#">Продукция</a></li>
                         <li><a className="menu__item" href="#">Проверка подлинности</a></li>
                         <li><a className="menu__item" href="#">Контакты</a></li>
                         
                        </ul>
                    </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-2 logo">
                    <div className="log">
                     <img src="./src/components/Header/img/image 1.png" className='imglogo'/>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-8 col-lg-8 nav">
                   <ul className='nav-item'>
                     <li>О компании</li>
                     <li>Продукция</li>
                     <li>Проверка подлинности</li>
                     <li>Контакты</li>
                    </ul>
                </div>
                <div className="col-xxl-4 col-xl-2 col-lg-2 country">
                  <img src="./src/components/Header/img/rus.svg" className='icon' />
                  <img src="./src/components/Header/img/usa.svg" className='icon' />
                </div>
            </div>
           
        </div>
        
    </header>
    </>
    )
    
}