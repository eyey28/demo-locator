// Constants
const OPEN_UNTIL = "Open until";

const selector = document.querySelector(".demo-locator");

// Datas
const locations = [
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
  {
    closingTime: "10pm",
    shopName: "The Shop",
    shopAddress: "3433 SEPULVEDA BLVD TORRANCE, CA 90505",
    phoneNumber: "(214) 826-0331",
  },
];

const countriesDropdownOptions = [
  {
    value: "us",
    label: "United States of America",
  },
  {
    value: "ph",
    label: "Philippines",
  },
];

// I used the clock icon as replacement for the missing filter icons.
const filterOptions = [
  {
    label: "Retail",
  },
  {
    label: "Outlet",
  },
  {
    label: "Factory",
  },
  {
    label: "Promotion",
  },
];

const setCountriesDropdownOptions = () => {
  const countriesDropdown = selector.querySelector(
    ".side-rail__dropdown-container"
  );

  if (!countriesDropdown) return;

  const dropdown = document.createElement("select");
  dropdown.classList.add("side-rail__countries-dropdown");
  dropdown.setAttribute("name", "countries");
  dropdown.setAttribute("id", "countries");

  const optionContents = countriesDropdownOptions.map((option) => {
    return `<option value=${option.value}>${option.label}</option>`;
  });

  dropdown.innerHTML = optionContents.join("");

  countriesDropdown.appendChild(dropdown);
};

const setFilterOptions = () => {
  const filterOptionsContainer = selector.querySelector(
    ".side-rail__filter-options"
  );

  if (!filterOptionsContainer) return;

  const filterLists = document.createElement("div");
  filterLists.classList.add("side-rail__filter-lists");

  const filterContents = filterOptions.map((option) => {
    return `<button class="side-rail__filter-item"><img src='./images/clock_icon.png' alt=${option.label} /><span>${option.label}</span></button>`;
  });

  filterLists.innerHTML = filterContents.join("");

  filterOptionsContainer.appendChild(filterLists);
};

const showLocationsLength = () => {
  const locationsLengthContainer = selector.querySelector(
    ".side-rail__locations-length"
  );

  if (!locationsLengthContainer) return;

  locationsLengthContainer.textContent = `There are ${locations.length} near you`;
};

const appendLocationsData = (locations) => {
  const locationsContainer = selector.querySelector(
    ".side-rail__locations-container"
  );

  if (!locationsContainer) return;

  const locationItem = document.createElement("div");
  locationItem.classList.add("side-rail__location-items");

  const locationContents = locations.map((location, index) => {
    return `<div class='side-rail__location-item'><div class='side-rail__top-container'><div class='side-rail__location-hour'><div class='side-rail__location-background'>${
      index + 1
    }</div><span>${OPEN_UNTIL}</span><span>${
      location.closingTime
    }</span></div><div class='side-rail__location-address'><span>The Shop</span><span>3433 SEPULVEDA BLVD TORRANCE, CA 90505</span><div class='side-rail__telephone'><img src='./images/phone_icon.png' alt='filter icon' /><span>(214) 826-0331</span></div></div><div><button class='side-rail__right-arrow'><img src='./images/chevron_right.png' alt="right arrow"></button></div></div><div class="side-rail__bottom-container"><div class='side-rail__directions-btn'>get directions</div></div></div>`;
  });

  locationItem.innerHTML = locationContents.join("");

  locationsContainer.appendChild(locationItem);
};

const toggleFilters = (status) => {
  console.log(status);

  const filterOptions = selector.querySelector(".side-rail__filter-options");
  const filterCloseBtn = selector.querySelector(".side-rail__filter-close-btn");

  if (status === "open") {
    filterOptions.classList.remove("hidden");
    filterCloseBtn.classList.remove("hidden");
  } else {
    filterOptions.classList.add("hidden");
    filterCloseBtn.classList.add("hidden");
  }
};

const filterBtn = selector.querySelector(".side-rail__filter-icon");
const filterCloseBtn = selector.querySelector(
  ".side-rail__filter-close-btn button"
);

filterBtn.addEventListener("click", () => toggleFilters("open"));
filterCloseBtn.addEventListener("click", () => toggleFilters("close"));

setCountriesDropdownOptions();
setFilterOptions();
showLocationsLength();
appendLocationsData(locations);
