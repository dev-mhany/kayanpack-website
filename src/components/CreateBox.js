import React, { useState, useEffect, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IsometricBox from "./IsometricBox";
import Button from "@mui/material/Button";

function CreateBox() {
  const [boxLength, setBoxLength] = useState();
  const [boxWidth, setBoxWidth] = useState();
  const [boxHeight, setBoxHeight] = useState();
  const [quantity, setQuantity] = useState();
  const [outsNo, setOutsNo] = useState();
  const [facerBPaperWeight, setFacerBPaperWeight] = useState();
  const [fluteBPaperWeight, setFluteBPaperWeight] = useState();
  const [fluteCPaperWeight, setFluteCPaperWeight] = useState();
  const [facerCPaperWeight, setFacerCPaperWeight] = useState();
  const [doubleBakerPaperWeight, setDoubleBakerPaperWeight] = useState();
  const [paperRollWidth, setPaperRollWidth] = useState();
  const [outsPossibilities, setOutsPossibilities] = useState([]);
  const dboxLength = boxWidth;
  const dboxWidth = boxLength;
  const dboxHeight = boxHeight;
  const dboxColor = "#ff8d4b";

  // Logic for calculations
  const totalCuts = () => {
    return quantity / outsNo;
  };

  const sheetLength = () => {
    if (boxHeight === 0) {
      return boxLength;
    } else {
      return boxLength * 2 + boxWidth * 2 + 4;
    }
  };

  const sheetWidth = useCallback(() => {
    return boxWidth + boxHeight;
  }, [boxWidth, boxHeight]); // Dependencies

  const sheetArea = () => {
    return (sheetLength() * sheetWidth()) / 10000;
  };

  const flap1 = () => {
    return boxHeight === 0 ? 0 : boxWidth / 2;
  };

  const flap2 = () => {
    return flap1(); // Same as flap1
  };

  const trim = () => {
    return paperRollWidth - sheetWidth() * outsNo;
  };
  const fullOrderLength = () => {
    return (totalCuts() * sheetLength()) / 100; // Convert to meters
  };
  const sheetWeight = () => {
    return (
      ((facerBPaperWeight / 100 +
        (fluteBPaperWeight / 100) * 1.4 +
        facerCPaperWeight / 100 +
        (fluteCPaperWeight / 100) * 1.4 +
        doubleBakerPaperWeight / 100) *
        sheetLength() *
        sheetWidth()) /
      100
    ); // The final division by 1000 is to convert to kg
  };
  useEffect(() => {
    // paperRollWidth should also be initialized for this to work correctly
    if (typeof boxWidth === "number" && typeof boxHeight === "number") {
      const newOutsPossibilities = calculateOutsAndTrim(
        sheetWidth(),
        paperRollWidth
      );
      setOutsPossibilities(newOutsPossibilities);
    }
  }, [boxWidth, boxHeight, paperRollWidth, sheetWidth]); // Correct dependencies

  const calculateOutsAndTrim = (sheetWidth) => {
    const possibilities = [];
    const rollWidths = [
      95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165,
      170, 175, 180,
    ];

    for (let outs = 1; outs <= 4; outs++) {
      let totalWidth = Math.ceil(sheetWidth * outs);
      // Find the nearest or next highest paper roll width to this total width
      let nearestRollWidth = rollWidths.find(
        (rollWidth) => rollWidth >= totalWidth
      );
      // If the nearest roll width does not exist, it means totalWidth is greater than the maximum paper roll width.
      if (!nearestRollWidth) {
        continue; // Skip this iteration as it's not a valid case
      }
      let trim = nearestRollWidth - totalWidth;

      // Check if the trim is negative, skip to the next highest roll width
      if (trim < 0) {
        continue; // Skip adding this as a possibility
      }

      // Only add to the possibilities if the trim is zero or positive
      if (trim >= 0 && trim <= 7) {
        possibilities.push({
          outs: outs,
          suggestedPaperRollWidth: nearestRollWidth,
          trim: trim,
        });
      }
    }

    return possibilities;
  };
  // onChange handler
  const handleInputChange = (setter) => (event) => {
    setter(Number(event.target.value));
  };
  function createWhatsAppLink() {
    let message = "Here are the details of the box:\n";

    if (boxLength > 0) message += `Box Length (CM): ${boxLength}\n`;
    if (boxWidth > 0) message += `Box Width (CM): ${boxWidth}\n`;
    if (boxHeight > 0) message += `Box Height (CM): ${boxHeight}\n`;
    if (quantity > 0) message += `Quantity: ${quantity}\n`;
    if (outsNo > 0) message += `Outs No: ${outsNo}\n`;
    if (facerBPaperWeight > 0)
      message += `Facer B Paper Weight: ${facerBPaperWeight}\n`;
    if (fluteBPaperWeight > 0)
      message += `Flute B Paper Weight: ${fluteBPaperWeight}\n`;
    if (fluteCPaperWeight > 0)
      message += `Flute C Paper Weight: ${fluteCPaperWeight}\n`;
    if (facerCPaperWeight > 0)
      message += `Facer C Paper Weight: ${facerCPaperWeight}\n`;
    if (doubleBakerPaperWeight > 0)
      message += `Double Baker Paper Weight: ${doubleBakerPaperWeight}\n`;
    if (paperRollWidth > 0)
      message += `Paper Roll Width (CM): ${paperRollWidth}\n`;

    // Add the following lines using message +=
    message +=
      `Total Cuts: ${Math.ceil(totalCuts())}\n` +
      `Sheet Length (CM): ${sheetLength()}\n` +
      `Sheet Width (CM): ${sheetWidth()}\n` +
      `Sheet Area (M^2): ${sheetArea()}\n` +
      `Flap 1 (CM): ${flap1()}\n` +
      `Flap 2 (Same as Flap 1): ${flap2()}\n` +
      `Trim (CM): ${trim()}\n` +
      `Full Order Length (M): ${fullOrderLength().toFixed(2)}\n` +
      `Sheet Weight (G): ${sheetWeight().toFixed(2)}\n`;

    // Assuming 'outsPossibilities' is an array of objects
    message += outsPossibilities
      .map(
        (possibility) =>
          `${possibility.outs} out(s) - Suggested Paper Roll Width: ${possibility.suggestedPaperRollWidth} CM - Trim: ${possibility.trim} CM`
      )
      .join("\n");

    // Encode the message to be URL-friendly
    const encodedMessage = encodeURIComponent(message);
    // Return the full URL for WhatsApp
    return `https://wa.me/+201068240737?text=${encodedMessage}`;
  }

  function handleWhatsAppSend() {
    // You can open a new window or redirect the current one
    window.open(createWhatsAppLink(), "_blank");
  }
  return (
    <Box sx={{ flexGrow: 1, padding: 2, fontWeight: "bold" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {/* Left side - Inputs */}
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-box-length"
            label="Box Length"
            variant="outlined"
            value={boxLength}
            onChange={handleInputChange(setBoxLength)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-box-width"
            label="Box Width"
            variant="outlined"
            value={boxWidth}
            onChange={handleInputChange(setBoxWidth)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-box-height"
            label="Box Height"
            variant="outlined"
            value={boxHeight}
            onChange={handleInputChange(setBoxHeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-quantity"
            label="Quantity"
            variant="outlined"
            value={quantity}
            onChange={handleInputChange(setQuantity)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-outs-no"
            label="Outs No"
            variant="outlined"
            value={outsNo}
            onChange={handleInputChange(setOutsNo)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-facer-b"
            label="Facer B Paper Weight"
            variant="outlined"
            value={facerBPaperWeight}
            onChange={handleInputChange(setFacerBPaperWeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-flute-b"
            label="Flute B Paper Weight"
            variant="outlined"
            value={fluteBPaperWeight}
            onChange={handleInputChange(setFluteBPaperWeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-flute-c"
            label="Flute C Paper Weight"
            variant="outlined"
            value={fluteCPaperWeight}
            onChange={handleInputChange(setFluteCPaperWeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-facer-c"
            label="Facer C Paper Weight"
            variant="outlined"
            value={facerCPaperWeight}
            onChange={handleInputChange(setFacerCPaperWeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-double-baker"
            label="Double Baker Paper Weight"
            variant="outlined"
            value={doubleBakerPaperWeight}
            onChange={handleInputChange(setDoubleBakerPaperWeight)}
          />
          <TextField
            sx={{ marginBottom: 2 }}
            id="outlined-basic-paper-roll-width"
            label="Paper Roll Width"
            variant="outlined"
            value={paperRollWidth}
            onChange={handleInputChange(setPaperRollWidth)}
          />{" "}
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Right side - Results */}
          <p>Total Cuts: {Math.ceil(totalCuts())}</p>
          <p>Sheet Length (CM): {sheetLength()}</p>
          <p>Sheet Width (CM): {sheetWidth()}</p>
          <p>Sheet Area (M^2): {sheetArea()}</p>
          <p>Flap 1 (CM): {flap1()}</p>
          <p>Flap 2 (Same as Flap 1): {flap2()}</p>
          <p>Trim (CM): {trim()}</p>
          <p>Full Order Length (M): {fullOrderLength().toFixed(2)}</p>
          <p>Sheet Weight (G): {sheetWeight().toFixed(2)}</p>
          {outsPossibilities.length > 0 && (
            <Box>
              {outsPossibilities.map((possibility, index) => (
                <div key={index}>
                  <p>
                    {possibility.outs} out(s) - Suggested Paper Roll Width:{" "}
                    {possibility.suggestedPaperRollWidth} CM - Trim:{" "}
                    {possibility.trim} CM
                  </p>
                </div>
              ))}
            </Box>
          )}{" "}
          <Button
            variant="contained"
            color="primary"
            onClick={handleWhatsAppSend}
          >
            Send on WhatsApp
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        overflow={"visible"}
      >
        <Grid item xs={12} md={12} overflow={"visible"}>
          {" "}
          {/* Adjust the md value as needed */}
          {/* Centered Isometric Box */}
          <IsometricBox
            dboxLength={dboxLength}
            dboxWidth={dboxWidth}
            dboxHeight={dboxHeight}
            dboxColor={dboxColor}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateBox;
