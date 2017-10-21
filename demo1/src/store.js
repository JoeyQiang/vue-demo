const STORAGE_KEY = 'todo-list';
export  default {
  fetch(){
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]');
  },
  save(items){
    window.sessionStorage.setItem(STORAGE_KEY,
      JSON.stringify(items));
  }
}
