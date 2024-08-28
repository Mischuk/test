# Sign widget

## Overview
This project integrates with the ECP Simulator, providing a widget to sign documents.

## Usage
Here's how you can integrate the widget into your project:

You can then use the open method of the `SignWidget` instance to open the widget with the desired options:
```javascript
widgetInstance.open({
  actorId: 'actorId',
  documentURL: 'https://document.url',
  callbackURL: 'https://callback.url',
});
```
The open method accepts an options object that can include the following properties:
* `documentURL`: The URL of the document to be signed. Exclude `documentData`
* `callbackURL`: The URL to which the widget should send the callback after the document is signed.
* `redirectURL`: (Optional) The URL to redirect to after the document is signed.
* `lang`: (Optional) The lang parameter specifies the language of the widget.
* `documentData`: The parameter specifies the document data to be signed. Exclude `documentURL`
* `actorId`: The parameter specifies the identifier of the actor who will sign the document.

For more details, refer to the [open](https://ecp-pre.simulator.company/lib/docs/types/types.Open.html) method documentation.

# Examples

### React

Create an instance of the `SignWidget` class, passing the ID of the container element where the widget should be rendered.

For more details, refer to the [documentation](https://ecp-pre.simulator.company/lib/docs/classes/entry.SignWidget.html#constructor).
##### HTML
```html
<body>
  <!-- ... -->
  <div id="widget-container"></div>
</body>
```
##### JS
```javascript
const loadScript = src => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => {
      resolve();
    };
    script.onerror = () => {
      reject(new Error(`Failed to load script: ${src}`));
    };
    document.body.appendChild(script);
  });
};

function App() {
  const widgetInstance = useRef(null);

  useEffect(() => {
    const initSignWidget = async () => {
      await loadScript('https://ecp-pre.simulator.company/lib/signwidget.js');
      const nodeId = 'widget-container';
      widgetInstance.current = new SignWidget(nodeId);
    };

    initSignWidget();

    return () => widgetInstance.current.close();
  }, []);

  const sign = () => {
    widgetInstance.current.open({
      actorId: 'actorId',
      documentURL: 'https://document.url',
      callbackURL: 'https://callback.url'
    });
  };

  return <div onClick={sign}>Open widget</div>
}
```

### HTML

Include the widget script in the `<head>` section of your HTML and add a container element with a specific ID where the widget will be rendered:

```html
<html lang="en">
<head>
  <script src="https://ecp-pre.simulator.company/umd/signwidget.js"></script>
</head>
<body>
  <div id="widget-container"></div>
  <button>Open widget</button>

  <script>
    const widgetInstance = new SignWidget('widget-container');
    document.querySelector('button').addEventListener('click', () => {
      widgetInstance.open({
        actorId: 'actorId',
        documentURL: 'https://document.url',
        callbackURL: 'https://callback.url',
      });
    });
  </script>
</body>
</html>
```



## Installation
This project is compatible with Node.js 18.x. You can download it from the [Node.js official site](https://nodejs.org/).

1. Install dependencies:
    ```bash
    yarn install
    ```

2. Create environment configuration files:
    - `.env`: For common environment variables.
    - `.env.development`: For development-specific variables.
    - `.env.production`: For production-specific variables.

3. Start the development server:
    ```bash
    yarn start
    ```
## Generate documentation
   ```bash
   yarn docs
   ```
## Environments
[DEV](https://ecp-dev.simulator.company/)
[PRE](https://ecp-pre.simulator.company/)


## Repository
[ecp-frontend](https://git.corezoid.com/pong/ecp-frontend)

## Links
[Documentation](https://ecp-pre.simulator.company/docs/)<br>
[Demo](https://ecp-pre.simulator.company/demo.html)
