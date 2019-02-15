import React, {Component} from 'react';
import { Container, Header, Left, Body, Title, Button, Item, Input, Text, Form, Label, View } from 'native-base';


export default class App extends Component {
  state = {
      im : 0,
      it : 0,
      mt : '',
      tb : '',
      imst : '',
      dgn : ''
  };
 
  countIMT = () => {
    
    // Validasi
    if (this.state.im == 0 || this.state.im == "") {
      alert("Massa diisi dulu, Tidak Boleh Kosong !");
    }
    else if (this.state.it == 0 || this.state.it == "") {
      alert("Tinggi Badan diisi dulu, Tidak Boleh Kosong !");
    }

    else {

      var IMTTemp = this.state.im / (Math.pow(this.state.it, 2));
      var dgnTemp = "";

      switch (true) {
        case (IMTTemp < 18.5):
          dgnTemp = "Berat badan kurang!";
          break;

        case (IMTTemp >= 18.5 && IMTTemp < 25):
          dgnTemp = "Berat badan ideal!";
          break;

        case (IMTTemp >= 25 && IMTTemp < 30):
          dgnTemp = "Berat badan berlebih!";
          break;

        case (IMTTemp >= 30 && IMTTemp < 40):
          dgnTemp = "Berat badan sangat berlebih!";
          break;

        case (IMTTemp >= 40):
          dgnTemp = "Berat badan obesitas!";
          break;
        default: break;
      }

      this.setState({
        mt: this.state.im,
        tb: this.state.it,
        imst: IMTTemp,
        dgn: dgnTemp
      });
    }
  }

  displayResult() {
    return (
      <React.Fragment>
        <View style={{ flexDirection: "column", alignItems: "center", marginTop: 50 }}>
          <Left />
          <Body>
            <Text style={{ fontSize: 20 }}>
              Massa tubuh :
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {this.state.mt} kg
            </Text>
            <Text style={{ fontSize: 20 }}>
              Tinggi badan:
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {this.state.tb.toFixed(2)} m
            </Text>
            <Text style={{ fontSize: 20 }}>
              Indeks massa tubuh:
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {this.state.imst}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Diagnosa:
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              {this.state.dgn}
            </Text>
          </Body>
        </View>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Container>
        <Header>
          <Left/>
            <Body>
              <Title>INDEKS MASSA TUBUH</Title>
            </Body>
        </Header>
        <Form style={{ flexDirection: "row" }}>
          <Item floatingLabel style={{ flex: 1 }}>
            <Label><Text>Massa (kg)</Text></Label>
            <Input onChangeText={(x) => {
              this.setState({ im: x });
            }}></Input>
          </Item>
          <Item floatingLabel style={{ flex: 1 }}>
            <Label><Text>Tinggi (cm)</Text></Label>
            <Input onChangeText={(x) => {
              this.setState({ it: parseInt(x) / 100 });
            }}></Input>
          </Item>
        </Form>
        <Button full style={{ marginTop: 50 }} onPress={this.countIMT}>
          <Text>HITUNG IMT</Text>
        </Button>
        {(this.state.dgn && this.state.imst) ? this.displayResult() : <Text></Text>}
      </Container>
    );
  }
}
