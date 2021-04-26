<template>
  <form id="signup-form" v-on:submit.prevent="submit">
    <div class="row">
      <label class="form-control-lg"
        ><h1>Атрибуты Формы</h1>
        <span class="text-danger"></span
      ></label>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Фамилия<span class="text-danger">*</span></label
        >
        <input
          type="name"
          v-model.trim="$v.fullname.$model"
          :class="{ 'is-invalid': validationStatus($v.fullname) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.fullname.required" class="invalid-feedback">
          Заполните поле "Фамилия".
        </div>
        <div v-if="!$v.fullname.minLength" class="invalid-feedback">Не менее 2 букв.</div>
        <div v-if="!$v.fullname.maxLength" class="invalid-feedback">
          Не более 40 букв.
        </div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Имя<span class="text-danger">*</span></label
        >
        <input
          type="name"
          v-model.trim="$v.name.$model"
          :class="{ 'is-invalid': validationStatus($v.name) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.name.required" class="invalid-feedback">Заполните поле "Имя".</div>
        <div v-if="!$v.name.minLength" class="invalid-feedback">Не менее 2 букв.</div>
        <div v-if="!$v.name.maxLength" class="invalid-feedback">Не более 40 букв.</div>
      </div>

      <div class="col-12 form-group">
        <label for="fname" class="col-form-label col-form-label-lg"
          >Отчество<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.fname.$model"
          class="form-control form-control-lg"
        />
      </div>
      <div class="col-12 form-group">
        <label for="start" class="col-form-label col-form-label-lg"
          >Дата рождения<span class="text-danger">*</span></label
        >
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2021-04-29"
          min="1935-01-01"
          max="2021-12-31"
          class="form-control form-control-lg"
          v-model.trim="$v.birth.$model"
          :class="{ 'is-invalid': validationStatus($v.birth) }"
        />
        <div v-if="!$v.birth.required" class="invalid-feedback">
          Заполните поле "Дата рождения".
        </div>
      </div>
      <div class="col-12 form-group">
        <label for="phone" class="col-form-label col-form-label-lg"
          >Номер телефона<span class="text-danger">*</span></label
        >
        <input
          type="tele"
          name="phone"
          class="form-control form-control-lg"
          placeholder="11 цифр. Начинается с +7"
          v-model.trim="$v.tele.$model"
          :class="{ 'is-invalid': validationStatus($v.tele) }"
        />
        <div v-if="!$v.tele.required" class="invalid-feedback">
          Заполните поле "Номер телефона".
        </div>
        <div v-if="!$v.tele.minLength" class="invalid-feedback">Не менее 11 цифр.</div>
        <div v-if="!$v.tele.maxLength" class="invalid-feedback">Не более 11 цифр.</div>
      </div>
      <div class="col-12 form-group" id="gender">
        <label for="gender" class="col-form-label col-form-label-lg"
          >Пол<span class="text-danger"></span
        ></label>
        <label id="male"
          ><input
            v-model.trim="$v.gender.$model"
            type="radio"
            name="user-prefer"
            unchecked
            value="male"
          />Мужчина</label
        >
        <label
          ><input
            v-model.trim="$v.gender.$model"
            id="female"
            type="radio"
            name="user-prefer"
            unchecked
            value="female"
          />Женщина</label
        >
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Группа клиентов<span class="text-danger">*</span></label
        >
        <select
          multiple
          class="form-control form-control-lg"
          value="selector"
          id="clients"
          v-model.trim="$v.clients.$model"
          :class="{ 'is-invalid': validationStatus($v.clients) }"
        >
          <option value="value1">VIP</option>
          <option value="value2">Проблемные</option>
          <option value="value3">ОМС</option>
        </select>
        <div v-if="!$v.tele.required" class="invalid-feedback">
          Заполните поле "Группа клиентов".
        </div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Лечащий врач<span class="text-danger"></span
        ></label>
        <select
          class="form-control form-control-lg"
          v-model.trim="doctor"
          type="select"
          value=""
        >
          <option value="">Выберите врача</option>
          <option value="Ivanov">Иванов</option>
          <option value="Zaharov">Захаров</option>
          <option value="Chernyshova">Чернышева</option>
        </select>
      </div>
      <div class="col-12 form-group" id="sms">
        <label class="col-form-label col-form-label-lg"
          >СМС-оповещение<span class="text-danger"></span
        ></label>
        <label
          ><input
            v-model.trim="send"
            id="send"
            type="checkbox"
            name="SMS"
            value="send"
            unchecked
          />Оправлять</label
        >
        <label
          ><input
            v-model.trim="notsend"
            id="notsend"
            type="checkbox"
            name="SMS"
            value="notsend"
            unchecked
          />Не отправлять</label
        >
      </div>
      <label class="form-control-lg"
        ><h1>Адрес</h1>
        <span class="text-danger"></span
      ></label>
      <div class="col-12 form-group">
        <label for="index" class="col-form-label col-form-label-lg"
          >Индекс<span class="text-danger"></span
        ></label>
        <input
          type="text"
          name="index"
          class="form-control form-control-lg"
          placeholder="Почтовый индекс"
          v-model.trim="$v.index.$model"
          :class="{ 'is-invalid': validationStatus($v.index) }"
        />
        <div v-if="!$v.index.required" class="invalid-feedback">
          Заполните поле "Индекс".
        </div>
        <div v-if="!$v.index.minLength" class="invalid-feedback">Не менее 4 цифр.</div>
        <div v-if="!$v.index.maxLength" class="invalid-feedback">Не более 6 цифр.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Страна<span class="text-danger"></span
        ></label>
        <select
          class="form-control form-control-lg"
          v-model.trim="country"
          type="select"
          value=""
        >
          <option value="">Выберите страну</option>
          <option value="Ukraine">Украина</option>
          <option value="Russia">Россия</option>
          <option value="Belarus">Беларусь</option>
          <option value="Kazakhstan">Казахстан</option>
        </select>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Область<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.district.$model"
          :class="{ 'is-invalid': validationStatus($v.district) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.district.required" class="invalid-feedback">
          Заполните поле "Область".
        </div>
        <div v-if="!$v.district.minLength" class="invalid-feedback">
          Не менее 10 букв.
        </div>
        <div v-if="!$v.district.maxLength" class="invalid-feedback">
          Не более 40 букв.
        </div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Город<span class="text-danger">*</span></label
        >
        <input
          type="text"
          v-model.trim="$v.city.$model"
          :class="{ 'is-invalid': validationStatus($v.city) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.city.required" class="invalid-feedback">
          Заполните поле "Город".
        </div>
        <div v-if="!$v.city.minLength" class="invalid-feedback">Не менее 2 букв.</div>
        <div v-if="!$v.city.maxLength" class="invalid-feedback">Не более 40 букв.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Улица<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.street.$model"
          :class="{ 'is-invalid': validationStatus($v.street) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.street.required" class="invalid-feedback">
          Заполните поле "Улица".
        </div>
        <div v-if="!$v.street.minLength" class="invalid-feedback">Не менее 2 букв.</div>
        <div v-if="!$v.street.maxLength" class="invalid-feedback">Не более 40 букв.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Дом<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.home.$model"
          :class="{ 'is-invalid': validationStatus($v.home) }"
          class="form-control form-control-lg"
        />
      </div>
      <label class="form-control-lg"
        ><h1>Паспорт</h1>
        <span class="text-danger"></span
      ></label>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Тип документа<span class="text-danger">*</span></label
        >
        <select
          class="form-control form-control-lg"
          v-model.trim="$v.id.$model"
          :class="{ 'is-invalid': validationStatus($v.id) }"
          type="select"
          value="selector"
        >
          <option value=""><article id="type">Выберите тип документа</article></option>
          <option value="Ivanov">Паспорт</option>
          <option value="Zaharov">Свидетельсвто о рождении</option>
          <option value="Chernyshova">Вод. удостоверение</option>
        </select>
        <div v-if="!$v.id.required" class="invalid-feedback">
          Выберите в поле "Тип паспорта".
        </div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Серия<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.series.$model"
          :class="{ 'is-invalid': validationStatus($v.series) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.series.required" class="invalid-feedback">
          Заполните поле "Серия документа".
        </div>
        <div v-if="!$v.series.minLength" class="invalid-feedback">Не менее 2 цифр.</div>
        <div v-if="!$v.series.maxLength" class="invalid-feedback">Не более 4 цифр.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Номер<span class="text-danger"></span
        ></label>
        <input
          type="number"
          v-model.trim="$v.nb.$model"
          :class="{ 'is-invalid': validationStatus($v.nb) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.nb.required" class="invalid-feedback">
          Заполните поле "Номер документа".
        </div>
        <div v-if="!$v.nb.minLength" class="invalid-feedback">Не менее 4 цифр.</div>
        <div v-if="!$v.nb.maxLength" class="invalid-feedback">Не более 6 цифр.</div>
      </div>
      <div class="col-12 form-group">
        <label class="col-form-label col-form-label-lg"
          >Кем выдан<span class="text-danger"></span
        ></label>
        <input
          type="text"
          v-model.trim="$v.whom.$model"
          :class="{ 'is-invalid': validationStatus($v.whom) }"
          class="form-control form-control-lg"
        />
        <div v-if="!$v.whom.required" class="invalid-feedback">
          Заполните поле "Кем выдан был документ?".
        </div>
        <div v-if="!$v.whom.minLength" class="invalid-feedback">Не менее 10 букв.</div>
        <div v-if="!$v.whom.maxLength" class="invalid-feedback">Не более 30 букв.</div>
      </div>
      <div class="col-12 form-group">
        <label for="start" class="col-form-label col-form-label-lg"
          >Дата выдачи<span class="text-danger">*</span></label
        >
        <input
          type="date"
          id="start"
          name="trip-start"
          value="2021-04-29"
          min="1935-01-01"
          max="2021-12-31"
          class="form-control form-control-lg"
          v-model.trim="$v.given.$model"
          :class="{ 'is-invalid': validationStatus($v.given) }"
        />
        <div v-if="!$v.given.required" class="invalid-feedback">
          Заполните поле "Дата выдачи документа".
        </div>
      </div>
      <div class="col-12 form-group text-center">
        <button class="btn btn-vue btn-lg col-4">Отправить</button>
      </div>
    </div>
  </form>
</template>
<script>
import { required, minLength, maxLength } from "/node_modules/vuelidate/lib/validators";
export default {
  name: "SignupForm",
  data: function () {
    return {
      fullname: "",
      name: "",
      fname: "",
      birth: "",
      tele: "",
      gender: "",
      clients: "",
      doctor: "",
      send: "",
      notsend: "",
      email: "",
      country: "",
      district: "",
      city: "",
      street: "",
      home: "",
      id: "",
      series: "",
      nb: "",
      whom: "",
      given: "",
      index: "",
    };
  },
  validations: {
    fullname: { required, minLength: minLength(2), maxLength: maxLength(40) },
    name: { required, minLength: minLength(2), maxLength: maxLength(40) },
    fname: { required, minLength: minLength(2), maxLength: maxLength(40) },
    birth: { required },
    tele: { required, minLength: minLength(11), maxLength: maxLength(11) },
    gender: { required },
    clients: { required },
    doctor: "",
    send: "",
    notsend: "",
    email: "",
    country: "",
    district: "",
    city: { required },
    street: "",
    home: "",
    id: { required },
    series: { required, minLength: minLength(2), maxLength: maxLength(4) },
    nb: { required, minLength: minLength(4), maxLength: maxLength(6) },
    whom: { required, minLength: minLength(15), maxLength: maxLength(40) },
    given: { required },
    index: { required, minLength: minLength(4), maxLength: maxLength(6) },
  },
  methods: {
    resetData: function () {
      this.fullname = "";
      this.name = "";
      this.fname = "";
      this.clients = "";
      this.gender = "";
      this.tele = "";
      this.index = "";
      this.birth = "";
      this.data = "";
      this.doctor = "";
      this.email = "";
      this.country = "";
      this.district = "";
      this.city = "";
      this.street = "";
      this.home = "";
      this.index = "";
      this.id = "";
      this.series = "";
      this.whom = "";
      (this.given = ""), (this.nb = "");
    },
    validationStatus: function (validaton) {
      return typeof validaton != "undefined" ? validaton.$error : false;
    },

    submit: function () {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      alert("Клиент успешно создан");
      this.$v.$reset();
      this.resetData();
    },
  },
};
</script>

<style>
html,
body {
  height: auto;
}

body {
  background-color: #00dbde;
  background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
}
#clients {
  padding: 20px;
}
#gender {
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
#male {
  padding: 15px;
}
#female {
  padding: 15px;
}
#clients {
  justify-content: center;
  align-items: center;
  text-align: center;
}
#sms {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
#send {
  padding: 15px;
  margin: 10px;
}
#notsend {
  padding: 15px;
  margin: 10px;
}

.btn-vue {
  background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
}
.btn-vue {
  cursor: pointer;
  margin: 20px;
  padding: 10px;
  text-align: center;
  transition: 0.6s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  font-weight: bold;
}
.btn-vue:active {
  transform: scale(0.85);
}
.btn-vue:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
@media only screen and (max-width: 375px) {
  #type {
    font-size: 12px;
  }
  .btn-vue {
    background-image: linear-gradient(to right, #314755 0%, #26a0da 51%, #314755 100%);
  }
  .btn-vue {
    cursor: pointer;
    font-size: 12px;
    margin: 20px;
    padding: 10px;
    text-align: center;
    transition: 0.6s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    font-weight: bold;
  }
  .btn-vue:active {
    transform: scale(0.85);
  }
  .btn-vue:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
}
</style>
