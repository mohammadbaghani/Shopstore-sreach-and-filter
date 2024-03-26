

import classes from './main-header.module.css';










function MainHeader() {
    return (


        <>
            <footer className={classes.footer}>

                <div className='parent-footer'>


                    <div className='child-nav ff'>
                        <ul className='ul-footer'>



                            <li href={`Products-list`} className='li-footer'>

                                خرید
                                آنلاین
                            </li>

                            <li href={`Products-list`} className='li-footer'>

                                تماس با ما
                            </li>




                            <li href={`root`} className='li-footer'>

                                صفحه اول
                            </li>

                            <li href={`Products-list`} className='li-footer'>

                                تماس با ما
                            </li>
                        </ul>

                        <ul className='ul-footer b'>



                            <li href={`Products-list`} className='li-footer'>
                                خرید
                                آنلاین
                            </li>

                            <li href={`Products-list`} className='li-footer'>

                                تماس با ما
                            </li>




                            <li href={`root`} className='li-footer'>

                                صفحه اول
                            </li>

                            <li href={`Products-list`} className='li-footer'>

                                تماس با ما
                            </li>
                        </ul>
                    </div>

                </div>

                <p className='p-footer'>
                    ©

                    حقوق مادی و معنوی این سایت برای محمد باغانی  محفوظ میباشد
                </p>



            </footer>

        </>

    )
}

export default MainHeader;