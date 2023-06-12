# react-advanced-select-element

Simple react UI tool implementation.

# Usage

There are 2 main way of using this library:

Regular select:

```sh
 <Select
        value="val1"
        options={["val1", "val2", "val3"]}
        onChange={(val) => {
          alert(val);
        }}
  />
```

Muptiple select:

```sh
  <Select
        isMultiple={true}
        value="val1"
        options={["val1", "val2", "val3"]}
        onChange={(val) => {
          alert(val);
        }}
   />
```
