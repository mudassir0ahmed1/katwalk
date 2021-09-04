var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          {/* <div className="loading-screen">
            <img className="img-responsive rotatings" alt="مشروع كات kat" src="assets/images/loader.gif" />
          </div> */}
          <div className="header-height openn">
            <div className="header container-fluid small open" id="header" itemScope itemType="http://schema.org/WPHeader">
              <div className="header-left">
                <a className="logo" href="index"><img alt="" src="assets/images/katwalk_logo.svg" /></a>
              </div>
              <div className="visible-xs-inline-block visible-sm-inline-block v-top header-phone-mobile hidden-md hidden-lg border-right">
                <div className="ico-search search-mob-open" />
              </div>
              <div className="v-dropdown inline-block v-top hidden-md hidden-lg">
                <div className="v-dropdown-opener">
                  <div className="header-cart v-top cart-open-btn pointer border-right">
                    <div className="ico-bag" />
                    <div className="label cart-count">
                      2
                    </div>
                  </div>
                </div>
                <div className="v-dropdown-block hidden-xs bottom cart-dropdown">
                  <div className="p-b-10 border-bottom-light bold cart-title">
                    My Bag
                  </div>
                  <div className="cart-dropdown-inner">
                    <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                      {/*                <div class="cart-item small border-bottom-light p-t-20 p-b-20 item-disabled">*/}
                      <div className="row">
                        <div className="col-xs-4"><img alt="Elegant Abaya" className="w100p" src="assets/images/products/abaya3.jpg" /></div>
                        <div className="col-xs-12">
                          <input name="product_id" type="hidden" defaultValue={5181} /> <input className="one-price" type="hidden" defaultValue={980.00} />
                          <div className="r material-icons small pointer text-dark cart-remove">
                            close
                          </div><a href="#">Elegant Abaya</a><br />
                          <a className="text-dark m-r-10 m-t-5" href="#">Aliya Design</a> <span className="text-gray">EAB-67</span><br />
                          <span className="text-dark size-val m-t-5 inline-block">M</span>
                          <div className="p-t-10 cart-details">
                            <div className="r cart-price">
                              <span className="price-count" data-price={980}>980</span> <span className="price-sym">SAR</span>
                            </div>
                            <div className="cart-counter inp-block">
                              <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22793} />
                              <div className="inp-err" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                      {/*                <div class="cart-item small border-bottom-light p-t-20 p-b-20 item-disabled">*/}
                      <div className="row">
                        <div className="col-xs-4"><img alt="Navy - Colored Wrap Abay" className="w100p" src="assets/images/products/abaya5.jpg" /></div>
                        <div className="col-xs-12">
                          <input name="product_id" type="hidden" defaultValue={5169} /> <input className="one-price" type="hidden" defaultValue={900.00} />
                          <div className="r material-icons small pointer text-dark cart-remove">
                            close
                          </div><a href="#">Navy - Colored Wrap Abaya</a><br />
                          <a className="text-dark m-r-10 m-t-5" href="#">Aliya Design</a> <span className="text-gray">EAB-66</span><br />
                          <span className="text-dark size-val m-t-5 inline-block">54</span>
                          <div className="p-t-10 cart-details">
                            <div className="r cart-price">
                              <span className="price-count" data-price={900}>900</span> <span className="price-sym">SAR</span>
                            </div>
                            <div className="cart-counter inp-block">
                              <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22796} />
                              <div className="inp-err" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center p-t-10 p-b-10 cart-open-btn cart-show-more pointer hide">
                    View all items
                  </div>
                  <div className="cart-total small">
                    <div className="r">
                      <span className="cart-total-sum" data-price={3200}> 3 200</span> <span className="price-sym">SAR</span>
                    </div>Total
                  </div>
                  <div className="cart-footer">
                    <a className="btn btn-dark" href="checkout"><span>Checkout</span></a>
                  </div>
                </div>
              </div>
              <a className="border-left header-favorite inline-block v-top hidden-xs hidden-sm  hidden-md hidden-lg" href="login">
                <div className="ico-favorite" />
                <div className="label v-middle">
                  0
                </div>
              </a>
              <div className="r hidden-md hidden-lg">
                <div className="menu-icon openn" id="menu-icon">
                  <div className="menu-icon-line" />
                  <div className="menu-icon-line" />
                  <div className="menu-icon-line" />
                </div>
              </div>
              <div className="menu-menu_cover">
                <div className="header-first" style={{display: 'block'}}>
                  <div className="header-right text-right">
                    {/*                    <span  class="user-shape"></span>*/}
                    {/*                <div class="pointer inline-block v-middle second_a" data-click="signup-click" data-content="Log in" >
                                          Log in
                                      </div>
                                      <div class="inline-block v-top">
                                          /
                                      </div>
                                      <div class="pointer inline-block v-middle second_a" data-click="signin-click" data-content="Register" >
                                          Register
                                      </div> */}
                    <div className="r">
                      <div className="visible-xs-inline-block visible-sm-inline-block v-top header-phone-mobile">
                        <div className=" material-icons search-mob-open">
                          search
                        </div>
                      </div>
                      <a className="border-right header-favorite inline-block v-top hidden-xs hidden-sm header-second">
                        {/*                            <div class="ico-search search-mob-open"></div>*/}
                        <form method="get" id="search" className="form-group inline-block v-middle desktop-search" action="#">
                          <div className="desktop-search-open ico-search" />
                          <input name="search" type="text" />
                          {/* <div class="inp-err"></div> */}
                          <button className="btn" type="submit" />
                        </form>
                      </a>
                      {/*                        <a class="border-right header-favorite inline-block v-top hidden-xs hidden-sm">*/}
                      {/*                            <div class="ico-search search-mob-open"></div>*/}
                      {/*                        </a>*/}
                      <div className="v-dropdown inline-block v-top">
                        <div className="v-dropdown-opener">
                          <div className="header-cart v-top cart-open-btn pointer">
                            <div className="ico-bag" />
                            <div className="label cart-count">
                              2
                            </div>
                          </div>
                        </div>
                        <div className="v-dropdown-block hidden-xs bottom cart-dropdown">
                          <div className="p-b-10 border-bottom-light bold cart-title">
                            My Bag
                          </div>
                          <div className="cart-dropdown-inner">
                            <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                              {/*                <div class="cart-item small border-bottom-light p-t-20 p-b-20 item-disabled">*/}
                              <div className="row">
                                <div className="col-xs-4"><img alt="Elegant Abaya" className="w100p" src="assets/images/products/abaya3.jpg" /></div>
                                <div className="col-xs-12">
                                  <input name="product_id" type="hidden" defaultValue={5181} /> <input className="one-price" type="hidden" defaultValue={980.00} />
                                  <div className="r material-icons small pointer text-dark cart-remove">
                                    close
                                  </div><a href="#">Elegant Abaya</a><br />
                                  <a className="text-dark m-r-10 m-t-5" href="#">Aliya Design</a> <span className="text-gray">EAB-67</span><br />
                                  <span className="text-dark size-val m-t-5 inline-block">M</span>
                                  <div className="p-t-10 cart-details">
                                    <div className="r cart-price">
                                      <span className="price-count" data-price={980}>980</span> <span className="price-sym">SAR</span>
                                    </div>
                                    <div className="cart-counter inp-block">
                                      <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22793} />
                                      <div className="inp-err" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                              {/*                <div class="cart-item small border-bottom-light p-t-20 p-b-20 item-disabled">*/}
                              <div className="row">
                                <div className="col-xs-4"><img alt="Navy - Colored Wrap Abay" className="w100p" src="assets/images/products/abaya5.jpg" /></div>
                                <div className="col-xs-12">
                                  <input name="product_id" type="hidden" defaultValue={5169} /> <input className="one-price" type="hidden" defaultValue={900.00} />
                                  <div className="r material-icons small pointer text-dark cart-remove">
                                    close
                                  </div><a href="#">Navy - Colored Wrap Abaya</a><br />
                                  <a className="text-dark m-r-10 m-t-5" href="#">Aliya Design</a> <span className="text-gray">EAB-66</span><br />
                                  <span className="text-dark size-val m-t-5 inline-block">54</span>
                                  <div className="p-t-10 cart-details">
                                    <div className="r cart-price">
                                      <span className="price-count" data-price={900}>900</span> <span className="price-sym">SAR</span>
                                    </div>
                                    <div className="cart-counter inp-block">
                                      <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22796} />
                                      <div className="inp-err" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center p-t-10 p-b-10 cart-open-btn cart-show-more pointer hide">
                            View all items
                          </div>
                          <div className="cart-total small">
                            <div className="r">
                              <span className="cart-total-sum" data-price={3200}> 3 200</span> <span className="price-sym">SAR</span>
                            </div>Total
                          </div>
                          <div className="cart-footer">
                            <a className="btn btn-dark" href="checkout"><span>Checkout</span></a>
                          </div>
                        </div>
                      </div>
                      <a className="border-left header-favorite inline-block v-top hidden-xs hidden-sm" href="login">
                        <div className="ico-favorite" />
                        <div className="label v-middle">
                          0
                        </div>
                      </a>
                      <a className="border-left header-favorite inline-block v-top hidden-xs hidden-sm" href="login">
                        <div className="ico-user" />
                      </a>
                      <a className="border-left pd_ar inline-block v-top hidden-xs hidden-sm" href="index_rtl.php">
                        عربي
                      </a>
                      {/*                        <img src="assets/images/user.svg" alt="User Login" style="width: 20px; padding-left: 10px;">*/}
                    </div>
                  </div>
                  {/*                <a class="header-left hidden-xs hidden-sm" href="#">+966 055 95 12 25</a>*/}
                  <div className="header-menu-cover">
                    <nav className="header-menu header-static" itemScope itemType="http://schema.org/SiteNavigationElement" role="navigation">
                      <ul>
                        <li className="visible-xs visible-sm header-menu-item-cover">
                          <a className="second_a" data-content="Catalog" href="#" itemProp="url">Catalog</a>
                        </li>
                        {/*                            <li class="second">*/}
                        {/*                                <a class="second_a menu-item--sale" data-content="Sale" href="sale" itemprop="url">Sale</a>*/}
                        {/*                            </li>*/}
                        <li className="second has-submenu">
                          <span className="second__wrap"><a className="second_a" data-content="What's New?" href="#" itemProp="url"><span itemProp="name">What's New?</span></a></span>
                          <ul className="header-menu__submenu">
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Pocket Trends</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Pastels</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Prints</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Ties</span></a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="second_a" data-content="Bespoke" href="bespoke" itemProp="url">Bespoke</a>
                        </li>
                        <li className="second has-submenu">
                          <span className="second__wrap"><a className="second_a" data-content="Shop" href="whats-new" itemProp="url"><span itemProp="name">Shop</span></a></span>
                          <ul className="header-menu__submenu">
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Style</b></span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Trend</b></span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Occassion</b></span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Casual Look</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Casual Look</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                            </li>
                            <li>
                              <a href="whats-new" itemProp="url"><span itemProp="name">Casual Look</span></a>
                            </li>
                          </ul>
                        </li>
                        <li className="hidden-xs hidden-sm">
                          <a className="second_a" data-content="Designers" href="designers" itemProp="url">Designers</a>
                        </li>
                        <li className=" ">
                          <a className="last" data-content="Outlets" href="#" itemProp="url">Outlet</a>
                        </li>
                        <li className="visible-xs visible-sm"><span className="second_a" data-content="Log in/Register">Log in/Register</span></li>
                      </ul>
                    </nav>
                    {/*                    <div class="visible-sm visible-xs">*/}
                    {/*                        <form id="search-mobile" name="search-mobile">*/}
                    {/*                            <div class="form-group subscribe-form">*/}
                    {/*                                <input type="text"> <label class="m-l-20">Search</label>*/}
                    {/*                                <div class="inp-err"></div><button class="btn" type="submit"><span class="material-icons text-right">search</span></button>*/}
                    {/*                            </div>*/}
                    {/*                        </form>*/}
                    {/*                        <div class="text-center m-t">*/}
                    {/*                            <a class="inline-block soc-fb" href="#"></a> <a class="inline-block soc-ins" href="#"></a>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                  </div>
                </div>
              </div>
              <div className="confirm confirm_desc">
                <div className="confirm_title">
                  Do you want to delete?
                </div><span className="btn btn_cancel">Cancel</span> <span className="btn btn_ok">ok</span>
              </div>
            </div>
            <div className="block-right cart-wrapper" id="cart-right">
              <div className="cart_close material-icons r pointer">
                close
              </div>
              <div className="block-right_title cart-title">
                My Bag
              </div>
              <div className="block-right_content cart-content-popup">
                <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                  <div className="row">
                    <div className="col-xs-4">
                      <a href="#"><img alt="Elegant Abaya" className="w100p" src="assets/images/products/abaya3.jpg" /></a>
                    </div>
                    <div className="col-xs-12">
                      {/*                        <div class="col-xs-12 item-disabled">*/}
                      <input name="product_id" type="hidden" defaultValue={5181} /> <input className="one-price" type="hidden" defaultValue={980.00} />
                      <div className="r material-icons small pointer text-dark cart-remove">
                        close
                      </div><a href="#">Elegant Abaya</a><br />
                      <a className="text-dark m-r-10 m-t-5" href="#">Aliya Designs</a> <span className="text-gray">EBA-67</span><br />
                      <span className="text-dark size-val m-t-5 inline-block">M</span>
                      <div className="p-t-10 cart-details">
                        <div className="r cart-price">
                          <span className="price-count" data-price={980}>980</span> <span className="price-sym">SAR</span>
                        </div>
                        <div className="cart-counter inp-block">
                          {/*                                    <div class="help-block"></div>*/}
                          <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22793} />
                          <div className="inp-err" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cart-item small border-bottom-light p-t-20 p-b-20">
                  <div className="row">
                    <div className="col-xs-4">
                      <a href="#"><img alt="Navy - Colored Wrap Abaya" className="w100p" src="assets/images/products/abaya5.jpg" /></a>
                    </div>
                    <div className="col-xs-12">
                      {/*                        <div class="col-xs-12 item-disabled">*/}
                      <input name="product_id" type="hidden" defaultValue={5169} /> <input className="one-price" type="hidden" defaultValue={900.00} />
                      <div className="r material-icons small pointer text-dark cart-remove">
                        close
                      </div><a href="#">Navy - Colored Wrap Abaya</a><br />
                      <a className="text-dark m-r-10 m-t-5" href="#">Aliya Design</a> <span className="text-gray">EBA-66</span><br />
                      <span className="text-dark size-val m-t-5 inline-block">M</span>
                      <div className="p-t-10 cart-details">
                        <div className="r cart-price">
                          <span className="price-count" data-price={1600}>900</span> <span className="price-sym">SAR</span>
                        </div>
                        <div className="cart-counter inp-block">
                          {/*                                    <div class="help-block"></div>*/}
                          <button className="count-dec" data-send-func="itemQuantityChange">−</button> <input className="count-val" data-input-type="int" data-value-max={99} data-value-min={1} disabled type="text" defaultValue={1} /> <button className="count-inc active" data-send-func="itemQuantityChange">+</button> <input name="basket_id" type="hidden" defaultValue={22796} />
                          <div className="inp-err" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block-right_footer cart-footer">
                <div className="cart-total small">
                  <div className="r">
                    <span className="cart-total-sum" data-price={3200}> 3 200</span> <span className="price-sym">SAR</span>
                  </div>Total
                </div>
                <a className="btn btn-dark btn-checkout-popup" href="checkout"><span>Checkout</span></a>
              </div>
            </div>
          </div>
          <div className="search-mob">
            <div className="search-mob_close">
            </div>
            <form action="#" method="get">
              <input type="text" name="search" placeholder="Search" />
            </form>
          </div>
          <div className="menu_mob">
            <div className="menu_mob_mask" />
            <div className="menu_mob_close">
            </div>
            <div className="menu_mob_content">
              <div className="menu_mob_top">
                <div className="menu_mob_top-w100">
                  <a href="index_rtl" className="ar_fnt clr_wht">العربية</a>
                  {/*                <a href="#" class="ico-phone"></a>*/}
                </div>
                <a href="#" className="search-mob-open"><span className="ico-search-wht" /></a>
                <a href="login"><span className="ico-favorite-wht" /></a>
                <a href="login"><span className="user-shape" /></a>
              </div>
              <div className="menu_mob_second">
                {/*            <ul class="currency_list-mob">*/}
                {/*                <li class="">*/}
                {/*                    <a href="#">SAR</a>*/}
                {/*                </li>*/}
                {/*                <li class="active">*/}
                {/*                    <a href="#">USD</a>*/}
                {/*                </li>*/}
                {/*            </ul>*/}
              </div>
              <ul className="menu_mob_ul" itemScope itemType="http://schema.org/SiteNavigationElement" role="navigation">
                <li className="second has-submenu">
                  <span className="second__wrap"><a className="second_a" data-content="What's New?" href="#" itemProp="url"><span itemProp="name">What's New?</span></a></span>
                  <ul className="header-menu__submenu">
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Pocket Trends</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Pastels</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Prints</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Ties</span></a>
                    </li>
                  </ul>
                </li>
                <li className="second">
                  <a className href="bespoke" itemProp="url"><span itemProp="name">Bespoke</span></a>
                </li>
                <li className="second has-submenu">
                  <span className="second__wrap"><a className="second_a" data-content="Shop" href="#" itemProp="url"><span itemProp="name">Shop</span></a></span>
                  <ul className="header-menu__submenu">
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Style</b></span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Casual Look</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Trend</b></span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Casual Look</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name" className="uppercase"><b>Shop by Occassion</b></span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Evening Look</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Workwear</span></a>
                    </li>
                    <li>
                      <a href="whats-new" itemProp="url"><span itemProp="name">Active Wear</span></a>
                    </li>
                    <li>
                      <a href="#" itemProp="url"><span itemProp="name">Casual Look</span></a>
                    </li>
                  </ul>
                </li>
                <li className="second">
                  <a className href="designers" itemProp="url"><span itemProp="name">Designer</span></a>
                </li>
                <li className="second">
                  <a href="#" itemProp="url"><span itemProp="name">Outlets</span></a>
                </li>
                <li className="second menu_mob_second mt_5e">
                  <a className="menu_mob_a" href="#" itemProp="url"><span itemProp="name">About Us</span></a>
                </li>
                <li className="second menu_mob_second">
                  <a className="menu_mob_a" href="#" itemProp="url"><span itemProp="name">Contact Us</span></a>
                </li>
                <li className="second menu_mob_second">
                  <a className="menu_mob_a" href="sale" itemProp="url"><span itemProp="name">Sell at Katwalk</span></a>
                </li>
                <li className="second menu_mob_second">
                  <a className="menu_mob_a" href="#" itemProp="url"><span itemProp="name">Faqs</span></a>
                </li>
                <li className="second menu_mob_second">
                  <a className="menu_mob_a" href="#" itemProp="url"><span itemProp="name">Privacy Policy, Terms &amp; Condition</span></a>
                </li>
              </ul>
              <div className="menu_mob_soc">
                <a href="#" className="soc-ins" target="_blank" />
                <a href="#" className=" soc-wap m-l-15" target="_blank" />
              </div>
              <div>
                <img className="ft_icn float-right" src="assets/images/header_icon.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="confirm confirm_mob">
            <div className="confirm_title"> Do you want to delete?</div>
            <span className="btn btn_cancel">Cancel</span>
            <span className="btn btn_ok">ok</span>
          </div>
        </div>
      );
    }
  });