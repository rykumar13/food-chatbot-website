class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  unhandledInput = () => {
    const message = this.createChatBotMessage(
      "I did not understand that. Please type a cuisine."
    );
    this.addMessageToState(message);
  };

  handleCategoryTypeDelivery = (state) => {
    const message1 = this.createChatBotMessage("Finding a place, one moment.", {
      widget: "Restaurant1",
    });
    this.setState((state) => ({
      ...state,
      categoryType: "Delivery",
    }));
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };

  handleOpeningHrsBtn1 = () => {
    const message1 = this.createChatBotMessage("Opening hours", {
      widget: "OpeningHours1",
    });
    this.addMessageToState(message1);
  };

  handleOpeningHrsBtn2 = () => {
    const message1 = this.createChatBotMessage("Opening hours", {
      widget: "OpeningHours2",
    });
    this.addMessageToState(message1);
  };

  handleOpeningHrsBtn3 = () => {
    const message1 = this.createChatBotMessage("Opening hours", {
      widget: "OpeningHours3",
    });
    this.addMessageToState(message1);
  };

  handleOpeningHrsBtn4 = () => {
    const message1 = this.createChatBotMessage("Opening hours", {
      widget: "OpeningHours4",
    });
    this.addMessageToState(message1);
  };

  handleOpeningHrsBtn5 = () => {
    const message1 = this.createChatBotMessage("Opening hours", {
      widget: "OpeningHours5",
    });
    this.addMessageToState(message1);
  };

  handleContactDetailsBtn1 = () => {
    const message1 = this.createChatBotMessage("Contact Details", {
      widget: "ContactDetails1",
    });
    this.addMessageToState(message1);
  };

  handleContactDetailsBtn2 = () => {
    const message1 = this.createChatBotMessage("Contact Details", {
      widget: "ContactDetails2",
    });
    this.addMessageToState(message1);
  };

  handleContactDetailsBtn3 = () => {
    const message1 = this.createChatBotMessage("Contact Details", {
      widget: "ContactDetails3",
    });
    this.addMessageToState(message1);
  };

  handleContactDetailsBtn4 = () => {
    const message1 = this.createChatBotMessage("Contact Details", {
      widget: "ContactDetails4",
    });
    this.addMessageToState(message1);
  };

  handleContactDetailsBtn5 = () => {
    const message1 = this.createChatBotMessage("Contact Details", {
      widget: "ContactDetails5",
    });
    this.addMessageToState(message1);
  };

  handleMenuBtn1 = () => {
    const message1 = this.createChatBotMessage("Here is the menu", {
      widget: "Menu1",
    });
    this.addMessageToState(message1);
  };

  handleMenuBtn2 = () => {
    const message1 = this.createChatBotMessage("Here is the menu", {
      widget: "Menu2",
    });
    this.addMessageToState(message1);
  };

  handleMenuBtn3 = () => {
    const message1 = this.createChatBotMessage("Here is the menu", {
      widget: "Menu3",
    });
    this.addMessageToState(message1);
  };

  handleMenuBtn4 = () => {
    const message1 = this.createChatBotMessage("Here is the menu", {
      widget: "Menu4",
    });
    this.addMessageToState(message1);
  };

  handleMenuBtn5 = () => {
    const message1 = this.createChatBotMessage("Here is the menu", {
      widget: "Menu5",
    });
    this.addMessageToState(message1);
  };

  handleSkipBtn1 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant2",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns2",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn2 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant3",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns3",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn3 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant4",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns4",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn4 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant5",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns5",
    });
    this.addMessageToState(message2);
  };

  handleSkipBtn5 = () => {
    const message1 = this.createChatBotMessage("how about...", {
      widget: "Restaurant1",
    });
    this.addMessageToState(message1);
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
    const message3 = this.createChatBotMessage(
      "We've run out of suggestions! maybe try something else?",
      {
        widget: "NextRestartBtns1",
      }
    );
    this.addMessageToState(message3);
  };

  handleCuisineMatch = (cuisineDesc, cuisineId) => {
    const message = this.createChatBotMessage(
      `${cuisineDesc}! not a bad choice.`,
      {
        widget: "categoryTypes",
      }
    );
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      cuisineType: cuisineId,
    }));
  };

  handleGetStartedBtn = () => {
    const message = this.createChatBotMessage("What cuisine would you like?");
    this.addMessageToState(message);
  };

  handleCategoryTypeTakeaway = () => {
    const message = this.createChatBotMessage("How about...", {
      widget: "Restaurant1",
    });
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      categoryType: "Takeaway",
    }));
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };

  handleCategoryTypeDineOut = () => {
    const message = this.createChatBotMessage("How about...", {
      widget: "Restaurant1",
    });
    this.addMessageToState(message);
    this.setState((state) => ({
      ...state,
      categoryType: "Dine-out",
    }));
    const message2 = this.createChatBotMessage("What do you think?", {
      widget: "MenuSkipBtns1",
    });
    this.addMessageToState(message2);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
