import ReconnectingWebSocket from "reconnecting-websocket";

function defaultClient() {
  return new ReconnectingWebSocket("ws://192.168.200.92:4649/Chat");
}

export default function createWebSocketPlugin(client = defaultClient()) {
  return (store) => {
      
    client.onmessage = function (event) {
      try {
        var data = JSON.parse(event.data);
        //console.log(data);
        if (data.type == "digital") {
          store.dispatch("storeDigitalSignal", {
            id: data.id,
            value: data.dValue,
          });
        }else if (data.type == "analog") {
          store.dispatch("storeAnalogSignal", {
            id: data.id,
            value: data.aValue,
          });
        }else if (data.type == "serial") {
          store.dispatch("storeSerialSignal", {
            id: data.id,
            value: data.sValue,
          });
        }else{
          console.log("no data type")
        }
      } catch (e) {
        console.log(event);
      }
    };

    client.onopen = function () {
      store.dispatch("connectionOpened");
    };

    client.onclose = function () {
      store.dispatch("connectionClosed");
    };

    client.onerror = function (error) {
      store.dispatch("connectionError", error);
    };

    store.subscribe((mutation) => {
      //console.log(mutation);
      //console.log(state);
      if (mutation.type == "sendDigitalSignal") {
        client.send(
          JSON.stringify({
            type: "digital",
            id: mutation.payload.id,
            dValue: mutation.payload.value,
          })
        );
      }else if (mutation.type == "sendAnalogSignal") {
        client.send(
          JSON.stringify({
            type: "analog",
            id: mutation.payload.id,
            aValue: mutation.payload.value,
          })
        );
      }else if (mutation.type == "sendSerialSignal") {
        client.send(
          JSON.stringify({
            type: "serial",
            id: mutation.payload.id,
            sValue: mutation.payload.value,
          })
        );
      }
    });

    //client.open()
  };
}
