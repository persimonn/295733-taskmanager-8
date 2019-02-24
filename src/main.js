'use strict';

const filterFeatures = [
  {
    caption: `all`,
    amount: 15,
    isChecked: true,
    isDisabled: false
  },
  {
    caption: `overdue`,
    amount: 0,
    isChecked: false,
    isDisabled: true
  },
  {
    caption: `today`,
    amount: 0,
    isChecked: false,
    isDisabled: true
  },
  {
    caption: `favorites`,
    amount: 7,
    isChecked: false,
    isDisabled: false
  },
  {
    caption: `repeating`,
    amount: 2,
    isChecked: false,
    isDisabled: false
  },
  {
    caption: `tags`,
    amount: 6,
    isChecked: false,
    isDisabled: false
  },
  {
    caption: `archive`,
    amount: 115,
    isChecked: false,
    isDisabled: false
  }
];

const cardData = [
  {
    color: `black`,
    isColorBarWave: false,
    cardText: `This is example of new task, you can add picture, set date and time, add tags.`,
    isCardEdit: true,
    isCardRepeat: false,
    isCardDeadline: true
  },
  {
    color: `pink`,
    isColorBarWave: false,
    cardText: `It is example of repeating task. It marks by wave.`,
    isCardEdit: false,
    isCardRepeat: true,
    isCardDeadline: false
  },
  {
    color: `yellow`,
    isColorBarWave: true,
    cardText: `This is card with missing deadline.`,
    isCardEdit: false,
    isCardRepeat: true,
    isCardDeadline: false
  },
  {
    color: `yellow`,
    isColorBarWave: true,
    cardText: `Here is a card with filled data`,
    isCardEdit: true,
    isCardRepeat: true,
    isCardDeadline: false
  },
  {
    color: `blue`,
    isColorBarWave: false,
    cardText: `This is a blue card`,
    isCardEdit: false,
    isCardRepeat: false,
    isCardDeadline: false
  },
  {
    color: `blue`,
    isColorBarWave: false,
    cardText: `Test card`,
    isCardEdit: false,
    isCardRepeat: false,
    isCardDeadline: false
  },
  {
    color: `pink`,
    isColorBarWave: false,
    cardText: `It is example of repeating task. It marks by wave.`,
    isCardEdit: false,
    isCardRepeat: true,
    isCardDeadline: false
  },
];

const filterContainer = document.querySelector(`.main__filter`);
const cardContainer = document.querySelector(`.board__tasks`);

const getFilterElement = (caption, amount, isChecked = false, isDisabled = false) => {
  return `
    <input
      type="radio"
      id="filter__${caption.toLowerCase()}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? ` checked` : ``}
      ${isDisabled ? ` disabled` : ``}
    />
    <label for="filter__${caption.toLowerCase()}" class="filter__label">
      ${caption.toUpperCase()} <span class="filter__${caption.toLowerCase()}-count">${amount}</span>
    </label>
    `;
};

const getCardElement = (color, isColorBarWave = false, cardText, isCardEdit = false, isCardRepeat = false, isCardDeadline = false) => {
  return `
    <article class="card ${isCardEdit ? ` card--edit` : ``} ${isCardRepeat ? ` card--repeat` : ``} ${isCardDeadline ? `card--deadline` : ``} card--${color.toLowerCase()}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled">
              favorites
            </button>
            </div>

            <div class="card__color-bar">
              <svg class="${isColorBarWave ? ` card__color-bar-wave` : ``}" width="100%" height="10">
                <use xlink:href="#wave"></use>
              </svg>
            </div>

            <div class="card__textarea-wrap">
              <label>
                <textarea
                  class="card__text"
                  placeholder="Start typing your text here..."
                  name="text">
                    ${cardText}</textarea>
              </label>
            </div>

            <div class="card__settings">
              <div class="card__details">
                <div class="card__dates">
                  <button class="card__date-deadline-toggle" type="button">
                    date: <span class="card__date-status">no</span>
                  </button>

                  <fieldset class="card__date-deadline" disabled>
                    <label class="card__input-deadline-wrap">
                      <input
                        class="card__date"
                        type="text"
                        placeholder="23 September"
                        name="date"/>
                    </label>
                    <label class="card__input-deadline-wrap">
                      <input
                        class="card__time"
                        type="text"
                        placeholder="11:15 PM"
                        name="time"/>
                    </label>
                  </fieldset>

                  <button class="card__repeat-toggle" type="button">
                    repeat:<span class="card__repeat-status">no</span>
                  </button>

                  <fieldset class="card__repeat-days" disabled>
                    <div class="card__repeat-days-inner">
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-mo-1"
                        name="repeat"
                        value="mo"/>
                      <label class="card__repeat-day" for="repeat-mo-1">mo</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-tu-1"
                        name="repeat"
                        value="tu"
                        checked/>
                      <label class="card__repeat-day" for="repeat-tu-1">tu</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-we-1"
                        name="repeat"
                        value="we"/>
                      <label class="card__repeat-day" for="repeat-we-1">we</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-th-1"
                        name="repeat"
                        value="th"/>
                      <label class="card__repeat-day" for="repeat-th-1">th</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-fr-1"
                        name="repeat"
                        value="fr"
                        checked/>
                      <label class="card__repeat-day" for="repeat-fr-1">fr</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        name="repeat"
                        value="sa"
                        id="repeat-sa-1"/>
                      <label class="card__repeat-day" for="repeat-sa-1">sa</label>
                      <input
                        class="visually-hidden card__repeat-day-input"
                        type="checkbox"
                        id="repeat-su-1"
                        name="repeat"
                        value="su"
                        checked/>
                      <label class="card__repeat-day" for="repeat-su-1">su</label>
                    </div>
                  </fieldset>
                </div>

                <div class="card__hashtag">
                  <div class="card__hashtag-list"></div>

                  <label>
                    <input
                      type="text"
                      class="card__hashtag-input"
                      name="hashtag-input"
                      placeholder="Type new hashtag here"/>
                  </label>
                </div>
            </div>

            <label class="card__img-wrap card__img-wrap--empty">
              <input
                type="file"
                class="card__img-input visually-hidden"
                name="img"/>
              <img
                src="img/add-photo.svg"
                alt="task picture"
                class="card__img"/>
            </label>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                <input
                  type="radio"
                  id="color-black-1"
                  class="card__color-input card__color-input--black visually-hidden"
                  name="color"
                  value="black"
                  checked/>
                <label
                  for="color-black-1"
                  class="card__color card__color--black">black
                </label>
                <input
                  type="radio"
                  id="color-yellow-1"
                  class="card__color-input card__color-input--yellow visually-hidden"
                  name="color"
                  value="yellow"/>
                <label
                  for="color-yellow-1"
                  class="card__color card__color--yellow">yellow
                  </label>
                <input
                  type="radio"
                  id="color-blue-1"
                  class="card__color-input card__color-input--blue visually-hidden"
                  name="color"
                  value="blue"/>
                <label
                  for="color-blue-1"
                  class="card__color card__color--blue">blue
                </label>
                <input
                  type="radio"
                  id="color-green-1"
                  class="card__color-input card__color-input--green visually-hidden"
                  name="color"
                  value="green"/>
                <label
                  for="color-green-1"
                  class="card__color card__color--green">green
                </label>
                <input
                  type="radio"
                  id="color-pink-1"
                  class="card__color-input card__color-input--pink visually-hidden"
                  name="color"
                  value="pink"/>
                <label
                  for="color-pink-1"
                  class="card__color card__color--pink">pink
                </label>
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>
  `;
};

const renderFilters = () => {
  filterFeatures.forEach((item) => {
    filterContainer.insertAdjacentHTML(`beforeend`, getFilterElement(item.caption, item.amount, item.isChecked, item.isDisabled));
  });
};

const renderCards = () => {
  cardData.forEach((item) => {
    cardContainer.insertAdjacentHTML(`beforeend`, getCardElement(item.color, item.isColorBarWave, item.cardText, item.isCardEdit));
  });
};

const getRandomNumberInInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const filterCards = () => {
  const removableElements = cardContainer.querySelectorAll(`article.card`);
  removableElements.forEach((elem) => cardContainer.removeChild(elem));
  const filteredCardAmount = getRandomNumberInInterval(1, 7);
  for (let i = 0; i < filteredCardAmount; i++) {
    cardContainer.insertAdjacentHTML(`beforeend`, getCardElement(cardData[i].color, cardData[i].isColorBarWave, cardData[i].cardText, cardData[i].isCardEdit));
  }
};

renderFilters();
renderCards();

filterContainer.addEventListener(`click`, function () {
  filterCards();
});
