import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import GetStartedBtn from "../components/Options/GetStartedBtn/GetStartedBtn";
import CategoryTypes from "../components/Options/CategoryTypes/CategoryTypes";
import CuisineTypes from "../components/Options/CuisineTypes/CuisineTypes";

import Restaurant1 from "../components/Restaurants/Restaurant1/Restaurant1";
import Restaurant2 from "../components/Restaurants/Restaurant2/Restaurant2";
import Restaurant3 from "../components/Restaurants/Restaurant3/Restaurant3";
import Restaurant4 from "../components/Restaurants/Restaurant4/Restaurant4";
import Restaurant5 from "../components/Restaurants/Restaurant5/Restaurant5";

import MenuSkipBtns1 from "../components/Options/MenuSkipBtns/MenuSkipBtns1/MenuSkipBtns1";
import MenuSkipBtns2 from "../components/Options/MenuSkipBtns/MenuSkipBtns2/MenuSkipBtns2";
import MenuSkipBtns3 from "../components/Options/MenuSkipBtns/MenuSkipBtns3/MenuSkipBtns3";
import MenuSkipBtns4 from "../components/Options/MenuSkipBtns/MenuSkipBtns4/MenuSkipBtns4";
import MenuSkipBtns5 from "../components/Options/MenuSkipBtns/MenuSkipBtns5/MenuSkipBtns5";

import Menu1 from "../components/Menu/Menu1/Menu1.jsx"
import Menu2 from "../components/Menu/Menu2/Menu2.jsx"
import Menu3 from "../components/Menu/Menu3/Menu3.jsx"
import Menu4 from "../components/Menu/Menu4/Menu4.jsx"
import Menu5 from "../components/Menu/Menu5/Menu5.jsx"

import OpeningHours1 from "../components/OpeningHours/OpeningHours1/OpeningHours1"
import OpeningHours2 from "../components/OpeningHours/OpeningHours2/OpeningHours2"
import OpeningHours3 from "../components/OpeningHours/OpeningHours3/OpeningHours3"
import OpeningHours4 from "../components/OpeningHours/OpeningHours4/OpeningHours4"
import OpeningHours5 from "../components/OpeningHours/OpeningHours5/OpeningHours5"

import ContactDetails1 from "../components/ContactDetails/ContactDetails1/ContactDetails1"
import ContactDetails2 from "../components/ContactDetails/ContactDetails2/ContactDetails2"
import ContactDetails3 from "../components/ContactDetails/ContactDetails3/ContactDetails3"
import ContactDetails4 from "../components/ContactDetails/ContactDetails4/ContactDetails4"
import ContactDetails5 from "../components/ContactDetails/ContactDetails5/ContactDetails5"

import NextRestartBtns1 from "../components/Options/NextRestartBtns/NextRestartBtns1/NextRestartBtns1"
import NextRestartBtns2 from "../components/Options/NextRestartBtns/NextRestartBtns2/NextRestartBtns2"
import NextRestartBtns3 from "../components/Options/NextRestartBtns/NextRestartBtns3/NextRestartBtns3"
import NextRestartBtns4 from "../components/Options/NextRestartBtns/NextRestartBtns4/NextRestartBtns4"
import NextRestartBtns5 from "../components/Options/NextRestartBtns/NextRestartBtns5/NextRestartBtns5"

import theme from "../styles/theme"
const { colors } = theme

const config = {
  botName: "FoodBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: colors.navy,
    },
    chatButton: {
      backgroundColor: colors.darkNavy,
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hello! my name is FoodBot, here to help you find a place to eat.`,
      {
        widget: "GetStartedBtn",
      }
    ),
  ],
  widgets: [
    {
      widgetName: "OpeningHours5",
      widgetFunc: (props) => <OpeningHours5 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "OpeningHours4",
      widgetFunc: (props) => <OpeningHours4 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "OpeningHours3",
      widgetFunc: (props) => <OpeningHours3 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "OpeningHours2",
      widgetFunc: (props) => <OpeningHours2 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "OpeningHours1",
      widgetFunc: (props) => <OpeningHours1 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "ContactDetails5",
      widgetFunc: (props) => <ContactDetails5 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "ContactDetails4",
      widgetFunc: (props) => <ContactDetails4 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "ContactDetails3",
      widgetFunc: (props) => <ContactDetails3 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "ContactDetails2",
      widgetFunc: (props) => <ContactDetails2 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "ContactDetails1",
      widgetFunc: (props) => <ContactDetails1 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "NextRestartBtns5",
      widgetFunc: (props) => <NextRestartBtns5 {...props} />,
    },
    {
      widgetName: "NextRestartBtns4",
      widgetFunc: (props) => <NextRestartBtns4 {...props} />,
    },
    {
      widgetName: "NextRestartBtns3",
      widgetFunc: (props) => <NextRestartBtns3 {...props} />,
    },
    {
      widgetName: "NextRestartBtns2",
      widgetFunc: (props) => <NextRestartBtns2 {...props} />,
    },
    {
      widgetName: "NextRestartBtns1",
      widgetFunc: (props) => <NextRestartBtns1 {...props} />,
    },
    {
      widgetName: "Menu5",
      widgetFunc: (props) => <Menu5 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Menu4",
      widgetFunc: (props) => <Menu4 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Menu3",
      widgetFunc: (props) => <Menu3 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Menu2",
      widgetFunc: (props) => <Menu2 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Menu1",
      widgetFunc: (props) => <Menu1 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "MenuSkipBtns1",
      widgetFunc: (props) => <MenuSkipBtns1 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns2",
      widgetFunc: (props) => <MenuSkipBtns2 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns3",
      widgetFunc: (props) => <MenuSkipBtns3 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns4",
      widgetFunc: (props) => <MenuSkipBtns4 {...props} />,
    },
    {
      widgetName: "MenuSkipBtns5",
      widgetFunc: (props) => <MenuSkipBtns5 {...props} />,
    },
    {
        widgetName: "CuisineTypes",
        widgetFunc: (props) => <CuisineTypes {...props} />,
        mapStateToProps: ["cuisineTypes"]
      },
    {
      widgetName: "GetStartedBtn",
      widgetFunc: (props) => <GetStartedBtn {...props} />,
      mapStateToProps: ["todos"]
    },
    {
      widgetName: "categoryTypes",
      widgetFunc: (props) => <CategoryTypes {...props} />,
      mapStateToProps: ["categoryType"]
    },
    {
      widgetName: "Restaurant1",
      widgetFunc: (props) => <Restaurant1 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
        "restaurantId"
      ]
    },
    {
      widgetName: "Restaurant2",
      widgetFunc: (props) => <Restaurant2 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant3",
      widgetFunc: (props) => <Restaurant3 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant4",
      widgetFunc: (props) => <Restaurant4 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
    {
      widgetName: "Restaurant5",
      widgetFunc: (props) => <Restaurant5 {...props} />,
      mapStateToProps: [
        "restaurants",
        "cuisineType",
        "categoryType",
        "latitude",
        "longitude",
      ]
    },
  ],
  state: {
    cuisineType: "",
    categoryType: "",
    restaurants: [],
    latitude: -36.8483, 
    longitude: 174.7626,
  }
};

export default config;
