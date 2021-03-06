Component({
  externalClasses: ['search-class', 'input-class', 'cancel-class'],
  properties: {
    cancelText: {
      type: String,
      value: '取消'
    },
    disabled: {
      type: Boolean,
      value: false
    },
    focus: {
      type: Boolean,
      value: false
    },
    keyword: {
      type: String,
      value: ''
    },
    show: {
      type: Array,
      value: ['icon', 'cancel']
    },
    placeholder: {
      type: String,
      value: '请输入查询关键字',
      observer(newVal) {
        this.setData({
          inputWidth: `${(newVal.length * 14) + 45}px`
        });
      }
    },
    useCancel: {
      type: Boolean
    },
    searchStyle: String,
    cancelStyle: String,
    inputStyle: String,
  },
  data: {
    inputWidth: 'auto'
  },
  methods: {
    blur() {
      this.triggerEvent('blur');
    },
    clearInput() {
      this.setData({
        focus: true
      });
      this.triggerEvent('change', { value: '' });
    },
    cancelSearch() {
      this.triggerEvent('cancel');
    },
    focus() {
      this.triggerEvent('focus');
    },
    inputChange(e) {
      this._inputvalue = e.detail.value;
      this.triggerEvent('change', { value: e.detail.value });
    },
    search(e) {
      this.triggerEvent('search', { value: e.detail.value });
    }
  }
});
