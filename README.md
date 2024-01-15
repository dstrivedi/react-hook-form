# react-hook-form

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/dstrivedi/react-hook-form)

# useForm()

# useController()

# Controller

# useFormContext()
- This custom hook allows you to access the form context.
- useFormContext is intended to be used in deeply nested structures, where it would become inconvenient to pass the context as a prop.

# FormProvider
- This component will host context object and allow consuming component to subscribe to context and use useForm props and methods.

# useWatch
- Behaves similarly to the watch API, however, this will isolate re-rendering at the custom hook level and potentially result in better performance for your application.