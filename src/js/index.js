document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.section');
  
  function checkScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight) {
        section.classList.add('animated');
      } else {
        section.classList.remove('animated');
      }
    });
  }
  
  window.addEventListener('scroll', checkScroll);
});


window.onload = () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("contentSection").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("contentSection").classList.remove("opacityAnimation")
      document.getElementById("contentSection").classList.add("opacityanimated")
    },500)
  },2000)
  const range = document.querySelectorAll(".range-slider span input");
  let progress = document.querySelector(".range-slider .progress");
  let gap = 0.1;
  const inputValue = document.querySelectorAll(".numberVal input");

  range.forEach((input) => {
    input.addEventListener("input", (e) => {
      let minRange = parseInt(range[0].value);
      let maxRange = parseInt(range[1].value);

      if (maxRange - minRange < gap) {
        if (e.target.className === "range-min") {
          range[0].value = maxRange - gap;
        } else {
          range[1].value = minRange + gap;
        }
      } else {
        inputValue[0].value = minRange;
        inputValue[1].value = maxRange;
      }
    });
  });
  try {
    function addToCarteFunction(){
      const addToCarte = document.querySelectorAll(".addToCarte");
      const numberOfProduct = document.getElementById("numberOfProduct");
      addToCarte.forEach((btn) => {
        btn.addEventListener("click", () => {
          const attribute = btn.getAttribute("data-text");
          if (attribute == "ازالة من العربة") {
            my_modal_1.showModal();
            numberOfProduct.innerText = Number(numberOfProduct.innerText) + 1;
            btn.innerHTML = `<img class="w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
            src="./images/basket.png" alt="" />ازالة من العربة`;
            btn.setAttribute("data-text", "اضف الي العربه");
            return;
          }
          my_modal_2.showModal();
          btn.setAttribute("data-text", "ازالة من العربة");
          btn.innerHTML = `<img class="w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
          src="./images/basket.png" alt="" />اضف الي العربه `;
          numberOfProduct.innerText = Number(numberOfProduct.innerText) - 1;
        });
      });
    }
    addToCarteFunction();
  } catch (error) {
    console.log("the element is not existe");
  }
  function selectAreaFunction() {
    const selectArea = document.querySelectorAll(".selectArea");
    const listSelected = document.getElementById("listAreaSelected");
    let listAreaSelected = [];
    try {
      listSelected.innerHTML = ``;
      selectArea.forEach((area, index) => {
        area.addEventListener("click", () => {
          if (listAreaSelected.indexOf(area.getAttribute("title")) > -1) {
            listAreaSelected.splice(
              listAreaSelected.indexOf(area.getAttribute("title")),
              1
            );
            renderListAreaSelected();
            return;
          }
          listAreaSelected.push(area.getAttribute("title"));
          renderListAreaSelected();
        });
      });
      function renderListAreaSelected() {
        listSelected.innerHTML = "";
        for (let i = 0; i < listAreaSelected.length; i++) {
          listSelected.innerHTML += `<li class="btn cursor-pointer">${listAreaSelected[i]} <button class="removeSelectedArea bg-red-500 hover:text-red-500 btn"><i class="fa-solid fa-trash"></i><button></li>`;
        }
        document
          .querySelectorAll(".removeSelectedArea")
          .forEach((btn, index) => {
            btn.addEventListener("click", () => {
              listAreaSelected.splice(index, 1);
              renderListAreaSelected();
            });
          });
      }
    } catch (error) {
      console.log("the element is not existe");
    }
  }
  selectAreaFunction();
  const chooseCountry = document.querySelectorAll(".chooseCountry");
  try {
    chooseCountry.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(
          "nameCountry"
        ).innerHTML = `<i class="fa-solid fa-chevron-down"></i> ${btn.getAttribute(
          "data-name"
        )}`;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const chooseCuurrency = document.querySelectorAll(".chooseCuurrency");
  try {
    chooseCuurrency.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById(
          "nameCurrency"
        ).innerHTML = `<i class="fa-solid fa-chevron-down"></i> ${btn.getAttribute(
          "data-currency"
        )}`;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const filter = document.getElementById("filter");
  try {
    filter.addEventListener("click", () => {
      document.getElementById("showFilter").classList.toggle("hidden");
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const typeOfFilter = document.querySelectorAll(".typeOfFilter");
  try {
    let lastElementActive = 2
    typeOfFilter.forEach((btn,index) => {
      btn.addEventListener("click",() => {
        if(index == lastElementActive) return;
        typeOfFilter[lastElementActive].classList.remove("bg-primary");
        typeOfFilter[lastElementActive].classList.remove("text-white");
        btn.classList.add("bg-primary");
        btn.classList.add("text-white");
        lastElementActive = index;
      })
    })
  } catch (error) {
    console.log("the element is not existe");
  }
  const showNav = document.getElementById("showNav");
  try {
    showNav.addEventListener("click", () => {
      document.getElementById("nav").classList.toggle("hidden");
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  const showSearch = document.getElementById("search");
  const showSearch2 = document.getElementById("search2");
  try {
    showSearch.addEventListener("keyup", (event) => {
      showSearchFunction("showSearch", event.target.value);
    });
    showSearch2.addEventListener("keyup", (event) => {
      showSearchFunction("showSearch2", event.target.value);
    });
    function showSearchFunction(id, value) {
      if (value != "") {
        document.getElementById(id).classList.remove("hidden");
        return;
      }
      document.getElementById(id).classList.add("hidden");
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  const publicTransportBtn = document.getElementById("publicTransportBtn");
  const privateTransferBtn = document.getElementById("privateTransfer");
  try {
    publicTransportBtn.addEventListener("click", (event) => {
      transportFunction("publicTransportBtn");
    });
    privateTransferBtn.addEventListener("click", (event) => {
      transportFunction("privateTransferBtn");
    });
    function transportFunction(btnId) {
      if (btnId == "publicTransportBtn") {
        if (
          Array.from(publicTransportBtn.classList).indexOf(
            "bg-primary-content"
          ) == -1
        ) {
          publicTransportBtn.classList.remove("bg-transparent");
          publicTransportBtn.classList.add("bg-primary-content");
        }
        privateTransferBtn.classList.remove("bg-primary-content");
        privateTransferBtn.classList.add("bg-transparent");
      } else {
        if (
          Array.from(privateTransferBtn.classList).indexOf(
            "bg-primary-content"
          ) == -1
        ) {
          privateTransferBtn.classList.remove("bg-transparent");
          privateTransferBtn.classList.add("bg-primary-content");
        }
        publicTransportBtn.classList.remove("bg-primary-content");
        publicTransportBtn.classList.add("bg-transparent");
      }
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreCarsLogo = document.getElementById("showMoreCarsLogo");
  try {
    showMoreCarsLogo.addEventListener("click", (event) => {
      const logocars = document.getElementById("logocars");
      logocars.innerHTML += `
      <button data-car="15" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/bmw.png" class="w-[60px] h-[60px]" alt="" />
    </button>
    <button data-car="16" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/merc.png" class="w-[60px] h-[60px]" alt="" />
    </button>
    <button data-car="17" class="logoCarButton btn h-auto bg-transparent py-[26px] px-[26px]">
      <img src="./images/fiat.png" class="w-[60px] h-[60px]" alt="" />
    </button>
      `;
      addEventToLogoCarButton();
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const externalPartsCarBtn = document.getElementById("externalPartsCarBtn");
  const interiorPartsCarBtn = document.getElementById("interiorPartsCarBtn");
  const accessoriesCarBtn = document.getElementById("accessoriesCarBtn");
  const carHitBtn = document.getElementById("carHitBtn");
  const oldCarBtn = document.getElementById("oldCarBtn");
  try {
    let lastActivePartsCarBtn = "externalPartsCarBtn";
    const mapImage = document.getElementById("mapImage");
    externalPartsCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "externalPartsCarBtn") return;
      mapImage.innerHTML = `            <img src="./images/Image5.png" usemap="#image-map" class="w-[336px] maparea">

      <map name="image-map">
        <area alt="" class="selectArea" title="product1"
          coords="72,66,223,56,253,57,268,68,266,128,256,140,224,143,128,139,77,130" shape="poly">
        <area alt="" class="selectArea" title="product2"
          coords="47,140,49,118,50,78,44,54,26,54,19,71,20,130,24,143" shape="poly">
        <area alt="" class="selectArea" title="product3" coords="20,184,21,193,30,176,74,172,73,204,31,196"
          shape="poly">
        <area alt="" class="selectArea" title="product4" coords="84,173,154,172,145,204,83,206" shape="poly">
        <area alt="" class="selectArea" title="product5" coords="244,175,308,174,318,200,272,202,242,201"
          shape="poly">
        <area alt="" class="selectArea" title="product6" coords="83,14,143,9,156,40,84,42" shape="poly">
        <area alt="" class="selectArea" title="product7" coords="20,25,35,18,55,25,67,7,74,8,78,41,34,40"
          shape="poly">
        <area alt="" class="selectArea" title="product8" coords="240,10,272,10,287,21,302,16,312,12,309,34,244,36"
          shape="poly">
        <area alt="" class="selectArea" title="product9" coords="302,54,316,57,321,98,318,136,304,143,298,125"
          shape="poly">
        <area alt="" class="selectArea" title="product10" coords="273,49,290,46,290,59" shape="poly">
        <area alt="" class="selectArea" title="product11" coords="274,154,288,135,292,151" shape="poly">
        <area alt="" class="selectArea" title="product12" coords="278,71,286,71,292,95,286,124,276,121"
          shape="poly">
        <area alt="" class="selectArea" title="product13" coords="164,4,192,6,224,7,232,30,223,48,157,43"
          shape="poly">
        <area alt="" class="selectArea" title="product14" coords="161,172,225,173,233,192,222,211,192,210,160,203"
          shape="poly">
        <area alt="" class="selectArea" title="product15"
          coords="172,147,191,148,202,153,251,153,250,159,203,160,189,162,170,161" shape="poly">
        <area alt="" class="selectArea" title="product16" coords="68,135,66,152,54,134" shape="poly">
        <area alt="" class="selectArea" title="product17" coords="69,45,70,54,64,60,54,59" shape="poly">
        <area alt="" class="selectArea" title="product18" coords="150,157,13" shape="circle">
        <area alt="" class="selectArea" title="product19" coords="119,144,117,157,124,168,128,143" shape="poly">
        <area alt="" class="selectArea" title="product20" coords="90,56,95,48,85,46" shape="poly">
        <area alt="" class="selectArea" title="product21" coords="94,139,95,150,84,148" shape="poly">
        <area alt="" class="selectArea" title="product22" coords="108,148,109,162,99,162" shape="poly">
        <area alt="" class="selectArea" title="product23" coords="36,148,46,156" shape="rect">
        <area alt="" class="selectArea" title="product24" coords="40,42,46,51" shape="rect">
      </map>`;
      $(function () {
        $(".maparea").maphilight();
      });
      selectAreaFunction();
      partsFunction(externalPartsCarBtn, "externalPartsCarBtn");
    });
    interiorPartsCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "interiorPartsCarBtn") return;
      mapImage.innerHTML = `<img src="./images/Image1.png" usemap="#image-map" class="w-[336px] maparea">

      <map name="image-map">
        <area alt="" title="product1" class="selectArea" coords="70,182,16" shape="circle">
        <area alt="" title="product2" class="selectArea" coords="70,27,17" shape="circle">
        <area alt="" title="product3" class="selectArea" coords="253,33,16" shape="circle">
        <area alt="" title="product4" class="selectArea" coords="256,179,18" shape="circle">
        <area alt="" title="product5" class="selectArea" coords="17,148,22,165,32,160,33,150" shape="poly">
        <area alt="" title="product6" class="selectArea" coords="19,46,30,52,31,60,31,67,15,65" shape="poly">
        <area alt="" title="product7" class="selectArea" coords="302,144,296,165,288,164,291,150" shape="poly">
        <area alt="" title="product8" class="selectArea" coords="298,65,294,45,280,42,288,61" shape="poly">
        <area alt="" title="product9" class="selectArea" coords="293,88,330,133" shape="rect">
        <area alt="" title="product10" class="selectArea" coords="12,96,57,131" shape="rect">
        <area alt="" title="product11" class="selectArea" coords="96,74,116,66,135,68,146,78,145,137,136,146,115,144,93,138"
          shape="poly">
        <area alt="" title="product12" class="selectArea" coords="61,70,70,68,76,74,75,107,77,135,73,144,61,141"
          shape="poly">
        <area alt="" title="product13" class="selectArea" coords="106,193,127,163,147,163,146,195" shape="poly">
        <area alt="" title="product14" class="selectArea" coords="167,191,176,170,188,160,215,161,209,196" shape="poly">
        <area alt="" title="product15" class="selectArea" coords="110,23,150,27,150,53,128,57" shape="poly">
        <area alt="" title="product16" class="selectArea" coords="164,30,208,32,211,59,176,60" shape="poly">
        <area alt="" title="product17" class="selectArea" coords="155,75,170,70,191,71,198,78,196,94,176,98,153,92"
          shape="poly">
        <area alt="" title="product18" class="selectArea" coords="152,126,166,118,194,119,196,148,170,147,153,145"
          shape="poly">
        <area alt="" title="product19" class="selectArea" coords="152,104,201,103,200,118,154,114" shape="poly">
        <area alt="" title="product20"
class="selectArea"                 coords="262,65,259,79,285,89,288,131,263,133,264,147,248,143,245,127,234,124,232,87" shape="poly">
        <area alt="" title="product21" class="selectArea" coords="31,91,47,93,50,82,59,77,60,61,144,66,34,33" shape="poly">
        <area alt="" title="product22" class="selectArea" coords="226,44,11" shape="circle">
        <area alt="" title="product23" class="selectArea" coords="222,68,243,64,242,74,225,74" shape="poly">
        <area alt="" title="product24" class="selectArea" coords="231,139,242,151" shape="rect">
        <area alt="" title="product25" class="selectArea" coords="232,185,220,168" shape="rect">
        <area alt="" title="product26" class="selectArea" coords="158,149,226,160" shape="rect">
        <area alt="" title="product27" class="selectArea" coords="98,152,122,170" shape="rect">
        <area alt="" title="product28" class="selectArea" coords="184,201,200,206" shape="rect">
        <area alt="" title="product29" class="selectArea" coords="153,161,171,174" shape="rect">
        <area alt="" title="product30" class="selectArea" coords="124,199,137,205" shape="rect">
        <area alt="" title="product31" class="selectArea" coords="122,12,138,21" shape="rect">
        <area alt="" title="product32" class="selectArea" coords="199,2,218,9,220,21,208,24" shape="poly">
        <area alt="" title="product33" class="selectArea" coords="212,216,227,201,212,198" shape="poly">
        <area alt="" title="product34" class="selectArea" coords="197,67,204,65,208,72,201,83" shape="poly">
        <area alt="" title="product35" class="selectArea" coords="152,55,171,69" shape="rect">
        <area alt="" title="product36" class="selectArea" coords="182,20,199,29" shape="rect">
        <area alt="" title="product37" class="selectArea" coords="230,138,242,152" shape="rect">
        <area alt="" title="product38" class="selectArea" coords="96,40,118,53" shape="rect">
        <area alt="" title="product39" class="selectArea" coords="208,79,216,73,227,79,228,137,218,144,208,142"
          shape="poly">
      </map>`;
      $(function () {
        $(".maparea").maphilight();
      });
      selectAreaFunction();
      partsFunction(interiorPartsCarBtn, "interiorPartsCarBtn");
    });
    accessoriesCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "accessoriesCarBtn") return;
      mapImage.innerHTML = `<img src="./images/Image2.png" usemap="#image-map" class="w-[336px] maparea">

      <map name="image-map">
          <area alt="" class="selectArea" title="product1"  coords="54,65,124,59,252,61,273,67,287,99,273,127,206,134,136,137,54,140,38,95" shape="poly">
          <area alt="" class="selectArea" title="product2"  coords="104,36,13" shape="circle">
          <area alt="" class="selectArea" title="product3"  coords="243,35,14" shape="circle">
          <area alt="" class="selectArea" title="product4"  coords="103,161,15" shape="circle">
          <area alt="" class="selectArea" title="product5"  coords="243,162,14" shape="circle">
          <area alt="" class="selectArea" title="product6"  coords="23,132,44,150" shape="rect">
          <area alt="" class="selectArea" title="product7"  coords="137,157,180,141,242,138,229,145,163,165" shape="poly">
          <area alt="" class="selectArea" title="product8"  coords="278,58,312,68,309,128,296,130,276,141,290,99" shape="poly">
          <area alt="" class="selectArea" title="product9"  coords="180,18,158,41,178,51,190,26" shape="poly">
          <area alt="" class="selectArea" title="product10"  coords="129,31,155,41" shape="rect">
          <area alt="" class="selectArea" title="product11"  coords="215,163,8" shape="circle">
          <area alt="" class="selectArea" title="product12"  coords="212,37,11" shape="circle">
          <area alt="" class="selectArea" title="product13"  coords="71,38,10" shape="circle">
          <area alt="" class="selectArea" title="product14"  coords="70,159,10" shape="circle">
          <area alt="" class="selectArea" title="product15"  coords="33,57,15" shape="circle">
          <area alt="" class="selectArea" title="product16"  coords="295,51,272,41" shape="rect">
      </map>`;
      $(function () {
        $(".maparea").maphilight();
      });
      selectAreaFunction();
      partsFunction(accessoriesCarBtn, "accessoriesCarBtn");
    });
    carHitBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "carHitBtn") return;
      mapImage.innerHTML = `<img src="./images/Image3.png" usemap="#image-map" class="w-[336px] maparea">

      <map name="image-map">
      <area class="selectArea" alt="" title="product1" coords="27,26,53,23,110,33,158,42,194,49,212,63,218,94,202,120,194,126,150,124,83,115,31,110,11,96,9,58" shape="poly">
      <area class="selectArea" alt="" title="product2" coords="220,80,232,65,243,62,247,74,258,78,244,87,222,95,232,104,277,108,314,111,323,144,324,174,312,186,282,192,254,191,217,190,194,188,178,187,160,180,162,176,133,150,152,138,210,118" shape="poly">
  </map>`;
      $(function () {
        $(".maparea").maphilight();
      });
      selectAreaFunction();
      partsFunction(carHitBtn, "carHitBtn");
    });
    oldCarBtn.addEventListener("click", () => {
      if (lastActivePartsCarBtn == "oldCarBtn") return;
      partsFunction(oldCarBtn, "oldCarBtn");
    });
    function partsFunction(btn, id) {
      btn.classList.remove("bg-transparent");
      btn.classList.add("bg-primary-content");
      const lastActiveButton = document.getElementById(lastActivePartsCarBtn);
      lastActiveButton.classList.remove("bg-primary-content");
      lastActiveButton.classList.add("bg-transparent");
      lastActivePartsCarBtn = id;
    }
  } catch (error) {
    console.log("the element is not existe");
  }
  try {
    function addEventToLogoCarButton() {
      let logoCarButton = document.querySelectorAll(".logoCarButton");
      let lastButtonCarActive = "";
      logoCarButton.forEach((button) => {
        button.addEventListener("click", () => {
          const dataCar = button.getAttribute("data-car");
          if (dataCar == lastButtonCarActive) {
            button.classList.toggle("bg-transparent");
            button.classList.toggle("bg-primary-content");
            lastButtonCarActive = "";
            return;
          }
          button.classList.toggle("bg-transparent");
          button.classList.toggle("bg-primary-content");
          if (lastButtonCarActive != "") {
            logoCarButton[lastButtonCarActive].classList.toggle(
              "bg-transparent"
            );
            logoCarButton[lastButtonCarActive].classList.toggle(
              "bg-primary-content"
            );
          }
          lastButtonCarActive = dataCar;
        });
      });
    }
    addEventToLogoCarButton();
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreCity = document.getElementById("showMoreCity");
  try {
    showMoreCity.addEventListener("click", (event) => {
      const city = document.getElementById("city");
      city.innerHTML += `<label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">الكل</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">تبوك</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">مكه</span>
    </label>
      `;
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreYears = document.getElementById("showMoreYears");
  try {
    showMoreYears.addEventListener("click", (event) => {
      const years = document.getElementById("years");
      years.innerHTML += `
      <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">الكل</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2023</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" checked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2024</span>
    </label>
    <label class="gap-2 cursor-pointer justify-start label w-[25%]">
      <input type="checkbox" defaultChecked
        class="checkbox border-primary-content checked:border-primary-content [--chkbg:theme(colors.primary.content)] [--chkfg:white]" />
      <span class="label-text text-[1.3rem]">2020</span>
    </label>
      `;
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const showMoreProducts = document.getElementById("showMoreProducts");
  try {
    showMoreProducts.addEventListener("click", (event) => {
      const products = document.getElementById("products");
      products.innerHTML += `          <div
      class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
      <div class="flex md:flex-row flex-col w-full md:w-[70%]">
        <div class="md:w-1/2 flex flex-col gap-[1rem]">
          <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
            باب سياره تيوتا جديد لم يستخدم
          </h3>
          <div class="w-full flex flex-col gap-2">
            <div class="w-full flex justify-between">
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-user text-primary-content"></i>
                محمد احمد</span>
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-comment-dots text-primary-content"></i>
                40</span>
            </div>
            <div class="w-full flex justify-between">
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
              <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                  class="fa-solid fa-clock text-primary-content"></i>
                الان</span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 flex flex-col gap-[1rem]">
          <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
          <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
          <button data-text="ازالة من العربة" class="addToCarte text-[1rem] xxl:text-[1rem] btn bg-primary-content">
            <img class="w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
              src="./images/basket.png" alt="" />اضف الي العربه
          </button>
        </div>
      </div>
      <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
        <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
      </div>
    </div>
    <div
    class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
    <div class="flex md:flex-row flex-col w-full md:w-[70%]">
      <div class="md:w-1/2 flex flex-col gap-[1rem]">
        <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
          باب سياره تيوتا جديد لم يستخدم
        </h3>
        <div class="w-full flex flex-col gap-2">
          <div class="w-full flex justify-between">
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-user text-primary-content"></i>
              محمد احمد</span>
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-comment-dots text-primary-content"></i>
              40</span>
          </div>
          <div class="w-full flex justify-between">
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
            <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
                class="fa-solid fa-clock text-primary-content"></i>
              الان</span>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 flex flex-col gap-[1rem]">
        <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
        <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
        <button data-text="ازالة من العربة" class="addToCarte text-[1rem] xxl:text-[1rem] btn bg-primary-content">
          <img class="w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
            src="./images/basket.png" alt="" />اضف الي العربه
        </button>
      </div>
    </div>
    <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
      <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
    </div>
  </div>
  <div
  class="flex w-full sm:w-1/2 md:w-full gap-5 flex-col-reverse justify-center text-center md:text-right  md:justify-start md:flex-row p-[24px] card border border-[#E4E7EE] bg-base-100 shadow-lg">
  <div class="flex md:flex-row flex-col w-full md:w-[70%]">
    <div class="md:w-1/2 flex flex-col gap-[1rem]">
      <h1 class="text-[20px] md:text-[20px]">باب سياره بيع تشليح</h1>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">
        باب سياره تيوتا جديد لم يستخدم
      </h3>
      <div class="w-full flex flex-col gap-2">
        <div class="w-full flex justify-between">
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-user text-primary-content"></i>
            محمد احمد</span>
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-comment-dots text-primary-content"></i>
            40</span>
        </div>
        <div class="w-full flex justify-between">
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-location-dot text-primary-content"></i>مكه</span>
          <span class="text-[1rem] md:text-[1rem] w-[50%] text-[#757575]"><i
              class="fa-solid fa-clock text-primary-content"></i>
            الان</span>
        </div>
      </div>
    </div>
    <div class="md:w-1/2 flex flex-col gap-[1rem]">
      <h1 class="text-[20px] md:text-[20px]">100 ريال</h1>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">العدد المتبقي : 3</h3>
      <h3 class="text-[1rem] md:text-[14px] text-[#757575]">المشاهده الان : 30</h3>
      <button data-text="ازالة من العربة" class="addToCarte text-[1rem] xxl:text-[1rem] btn bg-primary-content">
        <img class="w-[25px] sm:h-[25px] xxl:w-[32px] xxl:h-[32px]"
          src="./images/basket.png" alt="" />اضف الي العربه
      </button>
    </div>
  </div>
  <div class="w-full md:w-[30%] flex justify-center items-center border rounded-xl">
    <img src="./images/product1.png" class="sm:w-[110px] sm:h-[100px]" alt="" />
  </div>
</div>`;
addToCarteFunction();
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const phoneCodeBtn = document.querySelectorAll(".phoneCodeBtn");
  try {
    phoneCodeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        document.getElementById("phoneNumber").value =
          btn.getAttribute("data-phone");
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const copyPageUrl = document.getElementById("copyPageUrl");
  try {
    copyPageUrl.addEventListener("click", () => {
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute("id", "dummy_id");
      dummy.setAttribute("value", window.location.href);
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    });
  } catch (error) {}
  const addQuantiteOfProduct = document.querySelectorAll(
    ".addQuantiteOfProduct"
  );
  const quantiteOfProduct = document.querySelectorAll(".quantiteOfProduct");
  const minusQuantiteOfProduct = document.querySelectorAll(
    ".minusQuantiteOfProduct"
  );
  try {
    addQuantiteOfProduct.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        quantiteOfProduct[index].value =
          Number(quantiteOfProduct[index].value) + 1;
      });
    });
    minusQuantiteOfProduct.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        if (quantiteOfProduct[index].value == 1) return;
        quantiteOfProduct[index].value =
          Number(quantiteOfProduct[index].value) - 1;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const heart = document.querySelectorAll(".heart");
  try {
    heart.forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("text-primary-content");
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const displaySection = document.querySelectorAll(".displaySection");
  try {
    let lastSectionDisplay = "section1";
    let lastButtonActive = "0";
    displaySection.forEach((btn,index) => {
      btn.addEventListener("click", () => {
        if(lastSectionDisplay == btn.getAttribute("data-section")) return;
        document.getElementById(lastSectionDisplay).classList.toggle("hidden");
        lastSectionDisplay = btn.getAttribute("data-section");
        document.getElementById(lastSectionDisplay).classList.toggle("hidden");
        btn.classList.add("active");
        btn.classList.add("border-t-0");
        btn.classList.add("border-b-2")
        btn.classList.add("text-black");
        btn.classList.add("font-bold");
        displaySection[lastButtonActive].classList.remove("active");
        displaySection[lastButtonActive].classList.remove("border-t-0");
        displaySection[lastButtonActive].classList.remove("border-b-2");
        displaySection[lastButtonActive].classList.remove("text-black");
        displaySection[lastButtonActive].classList.remove("font-bold");
        lastButtonActive = index;
      });
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const sendMessage = document.getElementById("sendMessage");
  const fileUpload = document.getElementById("file-upload");
  const recordButton = document.getElementById("recordButton");
  try {
    sendMessage.addEventListener("click", () => {
      const message = document.getElementById("Message");
      let messages = document.getElementById("messages");
      if (message.value.trim() == "") {
        return;
      }
      const date = new Date();
      messages.innerHTML += `
      <div class="chat chat-start">
      <div class="chat-image avatar">
          <div class="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
      </div>
      <div class="chat-bubble">${message.value.trim()}</div>
      <div class="chat-footer opacity-50">
          اليوم : ${date.getHours()}:${date.getMinutes()}
      </div>
  </div>
      `;
    });
    fileUpload.addEventListener("change", (event) => {
      const files = event.target.files;
      const date = new Date();
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          image.src = e.target.result;
          image.style.width = "200px";
          image.style.height = "200px";
          console.log(image);
          messages.innerHTML += `
          <div class="chat chat-start">
          <div class="chat-image avatar">
              <div class="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>
          <img src="${image.src}" width="300px" height="200px"/>
          <div class="chat-footer opacity-50">
              اليوم : ${date.getHours()}:${date.getMinutes()}
          </div>
      </div>
          `;
        };

        reader.readAsDataURL(file);
      }
    });
    let mediaRecorder;
    let chunks = [];

    // Function to start recording
    function startRecording() {
      const date = new Date();
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          // Create a MediaRecorder object
          mediaRecorder = new MediaRecorder(stream);
          chunks = [];

          // Start recording
          mediaRecorder.start();

          // Event handler when data is available
          mediaRecorder.ondataavailable = function (event) {
            chunks.push(event.data);
          };

          // Event handler when recording stops
          mediaRecorder.onstop = function () {
            // Create a blob from the recorded data
            let blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });

            // Create a URL from the blob
            let audioURL = window.URL.createObjectURL(blob);
            messages.innerHTML += `
                    <div class="chat chat-start">
                    <div class="chat-image avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS chat bubble component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <audio controls src="${audioURL}"></audio>
                    <div class="chat-footer opacity-50">
                        اليوم : ${date.getHours()}:${date.getMinutes()}
                    </div>
                </div>
                    `;
          };
        })
        .catch(function (err) {
          console.error("Error accessing microphone:", err);
        });
    }

    // Function to stop recording
    function stopRecording() {
      if (mediaRecorder && mediaRecorder.state !== "inactive") {
        // Stop recording
        mediaRecorder.stop();
      }
    }

    // Event listener for the record button
    recordButton.addEventListener("click", function () {
      // If recording is already in progress, stop recording
      if (mediaRecorder && mediaRecorder.state === "recording") {
        stopRecording();
        recordButton.innerHTML = '<i class="fas fa-microphone"></i>';
      } else {
        // Otherwise, start recording
        startRecording();
        recordButton.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>';
      }
    });
  } catch (error) {
    console.log("the element is not existe");
  }

  // Get pagination elements
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const ellipsis = document.getElementById("ellipsis");
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const page99 = document.getElementById("page99");
  const page100 = document.getElementById("page100");
  try {
    // Set initial page
    let currentPage = 1;

    // Event listeners for previous and next buttons
    prevBtn.addEventListener("click", goToPrevPage);
    nextBtn.addEventListener("click", goToNextPage);

    // Function to go to the previous page
    function goToPrevPage() {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    }

    // Function to go to the next page
    function goToNextPage() {
      if (currentPage < 100) {
        currentPage++;
        updatePagination();
      }
    }

    // Function to update the pagination buttons based on the current page
    function updatePagination() {
      // Update page buttons
      page1.innerText = currentPage - 1;
      page2.innerText = currentPage;
      page99.innerText = currentPage + 97;
      page100.innerText = currentPage + 98;

      // Hide or show ellipsis
      if (currentPage === 1) {
        ellipsis.style.display = "none";
      } else {
        ellipsis.style.display = "inline-block";
      }

      // Disable previous and next buttons at first and last pages
      if (currentPage === 1) {
        prevBtn.disabled = true;
      } else {
        prevBtn.disabled = false;
      }

      if (currentPage === 100) {
        nextBtn.disabled = true;
      } else {
        nextBtn.disabled = false;
      }
    }
  } catch (error) {
    console.log("the element is not existe");
  }

  const profileImage = document.getElementById("profileImage");
  try {
    profileImage.addEventListener("change", (event) => {
      const files = event.target.files;
      const preview = document.getElementById("imgProfile");
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    });
  } catch (error) {
    console.log("the element is not existe");
  }
  const cancelCheckBoxBtn = document.getElementById("cancelCheckBoxBtn");
  try {
    cancelCheckBoxBtn.addEventListener("click",() =>{
      const cancelCheck = document.querySelectorAll(".cancelCheck");
      console.log(cancelCheck)
      cancelCheck.forEach((btn) =>{
        console.log(btn)
        btn.checked = false;
      })
    })
  } catch (error) {
    console.log("the element is not existe");
  }
  const upload = document.getElementById("upload");
  try {
    upload.addEventListener("change", (event) => {
      const files = event.target.files;
      const preview = document.getElementById("image-preview");
      preview.innerHTML = ""; // Clear previous previews

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        const file = files[i];

        reader.onload = function (e) {
          const image = new Image();
          image.src = e.target.result;
          image.style.width = "200px";
          image.style.height = "200px";
          preview.appendChild(image);
        };

        reader.readAsDataURL(file);
      }
    });
  } catch (error) {
    console.log("the element is not existe");
  }
};
