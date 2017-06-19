#quickly generate vue component file

### show case

![demo](https://raw.githubusercontent.com/dainash/ivue/master/images/record.gif)

### features

- Code completion
- Vue file beautify
- snippets
- Auto closing pairs
- Iview template support

### installation

```
ext install ivue
```

### snippets list

|  shortcut   | Content                                  |
| :---------: | :--------------------------------------- |
|      V      | <template></template><script><script><style></style> |
|    func     | function(){}                             |
|     Row     | <Row></Row>                              |
|     Col     | <Col span=""></Col>                      |
|   Button    | <Button type="primary"></Button>         |
|    Input    | <Input v-model="" placeholder=""></Input> |
| Inputnumber | <Input-number :max="10" :min="1" v-model="model"></Input-number> |
|    Table    | <Table :columns="column" :data="data"></Table> |
|   Select    | <Select v-model="model"><Option v-for="item in list" :value="value" :key="item"></Option></Select> |
| Datepicker  | <Date-picker type="datetime" format="yyyy/MM/dd HH:mm" placeholder="选择日期和时间"></Date-picker> |
|   Upload    | <Upload action=""><Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button></Upload> |
|   Message   | this.$Message.info('');                  |

