# node-red-contrib-iata-bcbp

[![GitHub version](https://badge.fury.io/gh/mlfunston%2Fnode-red-contrib-iata-bcbp.svg)](https://badge.fury.io/gh/mlfunston%2Fnode-red-contrib-iata-bcbp)
[![GitHub issues](https://img.shields.io/github/issues/mlfunston/node-red-contrib-iata-bcbp.svg)](https://github.com/mlfunston/node-red-contrib-iata-bcbp/issues)
[![GitHub license](https://img.shields.io/github/license/mlfunston/node-red-contrib-iata-bcbp.svg)](https://github.com/mlfunston/node-red-contrib-iata-bcbp/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/mlfunston/node-red-contrib-iata-bcbp.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmlfunston%2Fnode-red-contrib-iata-bcbp)

A set of Node-Red nodes to decode and encode IATA Resolution 792 Compliant Boarding Pass Barcode Data.

This is a Node-Red wrapper for the work by georgesmith46's bcbp NPM node <https://github.com/georgesmith46/bcbp>.

## Installing and Setting up

Add the IATA BCBP node to node-red through the manage palette tab or command line.

### Usage

Here's an example of basic usage:

![example](https://github.com/mlfunston/node-red-contrib-iata-bcbp/blob/master/examples/exampleFlow.png)

[Example Flow](https://github.com/mlfunston/node-red-contrib-iata-bcbp/blob/master/examples/exampleBCBP.flow)

## User guide

### Encode Node

Converts a JSON object to a BCBP string. Any of the following parameters can be skipped (except legs).

#### Object Structure

|Name|Description|Example values|
|----|----|----|
|passengerName|Passenger Name|<ul><li>DESMARAIS/LUC</li><li>DOE/JOHN</li></ul>|
|passengerDescription|Passenger Description|<ul><li>0 - Adult</li><li>1 - Male</li><li>2 - Female</li><li>3 - Child</li><li>4 - Infant</li><li>5 - No passenger (cabin baggage)</li><li>6 - Adult travelling with infant</li><li>7 - Unaccompanied minor</li></ul>|
|checkInSource|Source of check-in|<ul><li>W - Web</li><li>K - Airport Kiosk</li><li>R - Remote or Off Site Kiosk</li><li>M - Mobile Device</li><li>O - Airport Agent</li><li>T - Town Agent</li><li>V - Third Party Vendor</li></ul>|
|boardingPassIssuanceSource|Source of Boarding Pass Issuance|<ul><li>W - Web</li><li>K - Airport Kiosk</li><li>X - Transfer Kiosk</li><li>R - Remote or Off Site Kiosk</li><li>M - Mobile Device</li><li>O - Airport Agent</li><li>T - Town Agent</li><li>V - Third Party Vendor</li></ul>|
|issuanceDate|Date of Issue of Boarding Pass|<ul><li>6225</li><li>ISO 8601 formatted string</li><li>Moment.js object</li><li>JavaScript date object</li></ul>|
|documentType|Document Type|<ul><li>B - Boarding Pass</li><li>I - Itinery Receipt</li></ul>|
|boardingPassIssuerDesignator|Airline Designator of boarding pass issuer|<ul><li>AC</li></ul>|
|baggageTagNumber|Baggage Tag Licence Plate Number(s)|<ul><li>0014123456003</li></ul>|
|firstBaggageTagNumber|1st Non-Consecutive Baggage Tag Licence Plate Number|<ul><li>0014123456003</li></ul>|
|secondBaggageTagNumber|2nd Non-Consecutive Baggage Tag Licence Plate Number|<ul><li>0014123456003</li></ul>|
|securityDataType|Type of Security Data|<ul><li>1</li></ul>|
|securityData|Security Data|<ul><li>GIWVC5EH7JNT...</li></ul>|
|legs|Repeatable legs data|<ul><li>Array - See table below</li></ul>|

#### Legs Structure

Any of the following parameters can be skipped.

|Name|Description|Example values|
|----|----|----|
|operatingCarrierPNR|Operating carrier PNR Code|<ul><li>ABC123</li></ul>|
|departureAirport|From City Airport Code|<ul><li>YUL</li></ul>|
|arrivalAirport|To City Airport Code|<ul><li>FRA</li></ul>|
|operatingCarrierDesignator|Operating carrier Designator|<ul><li>AC</li></ul>|
|flightNumber|Flight Number|<ul><li>0834</li></ul>|
|flightDate|Date of Flight|<ul><li>226</li><li>ISO 8601 formatted string</li><li>Moment.js object</li><li>JavaScript date object</li></ul>|
|compartmentCode|Compartment Code|<ul><li>F</li></ul>|
|seatNumber|Seat Number|<ul><li>001A</li></ul>|
|checkInSequenceNumber|Check-in Sequence Number|<ul><li>0025</li></ul>|
|passengerStatus|Passenger Status|<ul><li>0 - Ticket issuance/passenger not checked in</li><li>1 - Ticket issuance/passenger checked in</li><li>2 - Bag checked/passenger not checked in</li><li>3 - Bag checked/passenger checked in</li><li>4 - Passenger passed security check</li><li>5 - Passenger passed security gate exit (coupon used)</li><li>6 - Transit</li><li>7 - Standby</li><li>8 - Boarding data revalidation done</li><li>9 - Original boarding line used at time of ticket issuance</li><li>A - Up- or down-grading required at close out</li></ul>|
|airlineNumericCode|Airline Numeric Code|<ul><li>014</li></ul>|
|serialNumber|Document Form/Serial Number|<ul><li>1234567890</li></ul>|
|selecteeIndicator|Selectee indicator|<ul><li>0</li></ul>|
|internationalDocumentationVerification|International Documentation Verification|<ul><li>0 - Travel document verification not required</li><li>1 - Travel document verification required</li><li>2 - Travel document verification performed</li></ul>|
|marketingCarrierDesignator|Marketing carrier designator|<ul><li>AC</li></ul>|
|frequentFlyerAirlineDesignator|Frequent Flyer Airline Designator|<ul><li>AC</li></ul>|
|frequentFlyerNumber|Frequent Flyer Number|<ul><li>1234567890123</li></ul>|
|idIndicator|ID/AD Indicator|<ul><li>0</li></ul>|
|freeBaggageAllowance|Free Baggage Allowance|<ul><li>20K</li></ul>|
|fastTrack|Fast Track|<ul><li>Y</li><li>N</li><li>true</li><li>false</li></ul>|
|airlineInfo|For individual airline use|<ul><li>LX58Z</li></ul>|

#### Example JSON Object

```json
{
    "legs": [
        {
            "operatingCarrierPNR": "ABC123",
            "departureAirport": "YUL",
            "arrivalAirport": "FRA",
            "operatingCarrierDesignator": "AC",
            "flightNumber": "0834",
            "flightDate": "2018-08-14T00:00:00.000Z",
            "compartmentCode": "F",
            "seatNumber": "001A",
            "checkInSequenceNumber": "0025",
            "passengerStatus": "1"
        }
    ],
    "passengerName": "DESMARAIS/LUC"
}
```

Outputs:

```
M1DESMARAIS/LUC       EABC123 YULFRAAC 0834 226F001A0025 106>60000
```

### Decode Node

Converts a BCBP string to a JSON object. The returned object uses the same data structure as the Encode node above.

#### Example String

```
M1DESMARAIS/LUC       EABC123 YULFRAAC 0834 226F001A0025 106>60000
```

Outputs:

```json
{
    "legs": [
        {
            "operatingCarrierPNR": "ABC123",
            "departureAirport": "YUL",
            "arrivalAirport": "FRA",
            "operatingCarrierDesignator": "AC",
            "flightNumber": "0834",
            "flightDate": "2018-08-14T00:00:00.000Z",
            "compartmentCode": "F",
            "seatNumber": "001A",
            "checkInSequenceNumber": "0025",
            "passengerStatus": "1"
        }
    ],
    "passengerName": "DESMARAIS/LUC"
}
*/
```

## To Do

1. [ ] Add further error handling / data checks
2. [ ] Add data capture / export
3. [ ] Add boarding pass validation node against airline DCS host using IATA BCBP XML format
4. [ ] Add basic validation rules engine
5. [ ] Add Barcode Image Decode
6. [ ] Add Boarding Pass template generation

## Authors & Contributors

* **Mark Funston** - *Node Red Wrapper* - [mlfunston](https://github.com/mlfunston)
* **georgesmith46** - *Original NPM Package for bcbp* - [georgesmith46](https://github.com/georgesmith46)

Contributions welcome! Feel free to fork this and provide updates and new features.
Don't forget to submit a pull request!

## License

This project is licensed under the GPL3.0 License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

This Node-RED module is based on the great work of **georgesmith46** - [georgesmith46](https://github.com/georgesmith46), using his [bcbp](https://github.com/georgesmith46/bcbp) libraries.

## Changelog

### v0.0.1 (latest)

* Initial Build
* IATA BCBP Decode Function
* IATA BCBP Encode Function
