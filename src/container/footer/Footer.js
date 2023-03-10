import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../../assets/images/logo-white.png'
import Header from '../header/Header';
import $ from "jquery";

import redLogo from '../../assets/images/logo-red.png';


function Footer( numberOfPage) {
    
    useEffect(() => {
        let footer = document.querySelector('.footer-sec');
        let header = document.getElementById('header');
    
        function hideHeader() {
            if(footer.classList.contains('active')) {
                header.classList.add('header-hide');
            } else {
                header.classList.remove('header-hide');
            }
        }
        setInterval(hideHeader,500);
    });



    var accordion = (function () {
        var $accordion = $(".js-accordion");
        var $accordion_header = $accordion.find(".js-accordion-header");
        var $accordion_item = $(".js-accordion-item");

        // default settings
        var settings = {
            // animation speed
            speed: 400,

            // close all other accordion items if true
            oneOpen: false
        };

        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on("click", function () {
                    accordion.toggle($(this));
                });

                $.extend(settings, $settings);

                // ensure only one accordion is active if oneOpen is true
                if (settings.oneOpen && $(".js-accordion-item.active").length > 1) {
                    $(".js-accordion-item.active:not(:first)").removeClass("active");
                }

                // reveal the active accordion bodies
                $(".js-accordion-item.active").find("> .js-accordion-body").show();
            },
            toggle: function ($this) {
                if (
                    settings.oneOpen &&
                    $this[0] !=
                    $this
                        .closest(".js-accordion")
                        .find("> .js-accordion-item.active > .js-accordion-header")[0]
                ) {
                    $this
                        .closest(".js-accordion")
                        .find("> .js-accordion-item")
                        .removeClass("active")
                        .find(".js-accordion-body")
                        .slideUp();
                }

                // show/hide the clicked accordion item
                $this.closest(".js-accordion-item").toggleClass("active");
                $this.next().stop().slideToggle(settings.speed);
            }
        };
    })();

    $(document).ready(function () {
        accordion.init({ speed: 300, oneOpen: true });
    });


    return (
     
        <section id='footer-sec' className='section footer-sec' data-anchors={numberOfPage}>
            <footer id="footer">
            <div  className="cont-for-red-l">
                <div className="line-1"></div>
                <div className="radius-1">
                    <div className="radius-11"></div>
                </div>
                <div className="radius-2">
                    <div className="radius-11"></div>
                </div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-1"></div>
                <div className="line-1"></div>
            </div>

            <div className="footer__top container">
                <div className="footer__top-nav">
                    <ul className="footer__wrapper-list">
                        <li className="footer__item-col">
                            <a className="footer__icon-link" href="#">
                                <img className="footer__icon" src={redLogo} width="30" height="30"
                                    alt="logo" />
                            </a>
                        </li>
                        <li className="footer__item-col">
                            <ul className="footer__item-lists">
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        Equine Ecosystem
                                    </h3>
                                    <h3 className="footer__list-heading lower-prior">
                                        ?????????????????? ??????????????????
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ????????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading lower-prior">
                                        ???????????? ??????????????????
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading lower-prior">
                                        ???????????? ????????????????
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????? ??????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item-col">
                            <ul className="footer__item-lists">
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        Equine Network
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???????????? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???????????????????? ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item-col">
                            <ul className="footer__item-lists">
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        Equine Directory
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ??????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????? ???? ????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ?????????????????? ?? ???????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        Equine Wiki
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???? ??????????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item-col">
                            <ul className="footer__item-lists">
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        Equine Life
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????? ??????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading lower-prior">
                                        ???????????????? ????????????????????
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="footer__item-col">
                            <ul className="footer__item-lists">
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        EHOSS
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????? ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???????????? ?? EHOSS
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ???????????????????? ????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????????????????????????? ???? ??????????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ????????????, ???????? ??????????????????
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                ?????????? ???? ??????????????????
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="footer__lists-item">
                                    <h3 className="footer__list-heading">
                                        ????????????????
                                    </h3>
                                    <ul className="footer__list">
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Instagram
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Facebook
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Linkedin
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Youtube
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Crunchbase
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Tiktok
                                            </a>
                                        </li>
                                        <li className="footer__item">
                                            <a className="footer__item-link" href="">
                                                Researchgate
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
            <div id="accardion" className="accordion js-accordion accardion-wrapper">
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">Equine Ecosystem
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <div className="accordion js-accordion">
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ??????????????????
                                    ??????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ??????????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ??????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ????????????????????
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ???????????? ??????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ????????????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ??????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????? ??????????????????????????
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ???????????? ????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????? ??????????????
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item active">
                    <div className="accordion-header js-accordion-header">Equine Network
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <ul className="footer__mini-list">
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ?????????????????? ??????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ?????????????????? ????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???????????? ??????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???????????????????? ????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ?????????????????? ??????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????????????
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">Equine Directory
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <ul className="footer__mini-list">
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ??????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ??????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ?????????? ???? ????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ?????????????????? ?? ???????????????
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">Equine Wiki
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <ul className="footer__mini-list">
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ??????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ???? ??????????????????????
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">Equine Life
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <ul className="footer__mini-list">
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ?????? ??????????
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">???????????????? ????????????????????
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <ul className="footer__mini-list">
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ????????????????????????
                                </a>
                            </li>
                            <li className="footer__mini-item">
                                <a className="footer__mini-link" href="">
                                    ??????????????????
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="accordion__item js-accordion-item">
                    <div className="accordion-header js-accordion-header">EHOSS
                    </div>
                    <div className="accordion-body js-accordion-body">
                        <div className="accordion js-accordion">
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ?????? ????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ???????????? ?? EHOSS
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ??????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ???????????????????? ????????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????????????????????????? ???? ??????????????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ????????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ????????????, ???????? ??????????????????
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????? ???? ??????????????????
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Instagram
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Facebook
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Linkedin
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Youtube
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Crunchbase
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Tiktok
                                                </a>
                                            </li>
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    Researchgate
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion__item js-accordion-item">
                                <div className="accordion-header js-accordion-header js-accordion-headerM"> ???????????? ????????????????
                                </div>
                                <div className="accordion-body js-accordion-body">
                                    <div className="accordion-body__contents">
                                        <ul className="footer__mini-list">
                                            <li className="footer__mini-item">
                                                <a className="footer__mini-link" href="">
                                                    ?????????? ??????????????
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer__bottom ">
                <ul className="footer__bottom-list container">
                    <li className="footer__bottom-item">
                        <span className="footer__bottom-link copy">Copyright ??? 2022 EHOSS s.r.o ?????? ?????????? ????????????????.</span>
                    </li>
                    <li className="footer__bottom-item">
                        <a className="footer__bottom-link" href="">???????????????? ????????????????????????????????</a>
                    </li>
                    <li className="footer__bottom-item">
                        <a className="footer__bottom-link" href="">?????????? ????????????????????????</a>
                    </li>
                    <li className="footer__bottom-item">
                        <a className="footer__bottom-link" href="">???????????? ???? ??????????????????????????</a>
                    </li>
                    <li className="footer__bottom-item">
                        <a className="footer__bottom-link" href="">???????????????? ????????????????????</a>
                    </li>
                    <li className="footer__bottom-item">
                        <a className="footer__bottom-link" href="">?????????? ??????????</a>
                    </li>
                </ul>
            </div>
        </footer>
    </section>
            

 
    )
}

export default Footer;