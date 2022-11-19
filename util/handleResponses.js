import Vue from "vue";
export const handleErrorNotification = (err) => {
  Vue.toasted.error(err);

};
export const handleSuccessNotification = (msg) => {
  Vue.toasted.success(msg);
};
