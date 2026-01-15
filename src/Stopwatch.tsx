import { useState, useEffect } from 'react'
import { Box, Button, Typography, Paper, List, ListItem, ListItemText } from '@mui/material'

function Stopwatch() {
  const [timeValue, setTimeValue] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [lapsList, setLapsList] = useState<number[]>([])
  const [speedValue, setSpeedValue] = useState(1)

  useEffect(() => {
    let intervalId: number | undefined

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimeValue((oldTime) => oldTime + 0.1)
      }, 100 / speedValue)
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isRunning, speedValue])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setTimeValue(0)
    setIsRunning(false)
    setLapsList([])
    setSpeedValue(1)
  }

  const handleAddLap = () => {
    setLapsList([...lapsList, timeValue])
  }

  const handleSpeedUp = () => {
    if (speedValue < 2) {
      setSpeedValue(speedValue * 2)
    }
  }

  const handleSpeedDown = () => {
    if (speedValue > 0.5) {
      setSpeedValue(speedValue / 2)
    }
  }

  const getTimeText = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secondsPart = Math.floor(seconds % 60)
    const smallPart = Math.floor((seconds % 1) * 10)

    const hoursText = hours.toString().padStart(2, '0')
    const minutesText = minutes.toString().padStart(2, '0')
    const secondsText = secondsPart.toString().padStart(2, '0')

    return `${hoursText}:${minutesText}:${secondsText}.${smallPart}`
  }

  return (
    <Box sx={{ padding: 3, maxWidth: 600, margin: '0 auto' }}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h3" align="center" gutterBottom>
          {getTimeText(timeValue)}
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 3 }}>
          {!isRunning ? (
            <Button variant="contained" color="primary" onClick={handleStart}>
              Start
            </Button>
          ) : (
            <Button variant="contained" color="secondary" onClick={handleStop}>
              Stop
            </Button>
          )}
          <Button variant="outlined" onClick={handleReset}>
            Reset
          </Button>
          <Button variant="outlined" onClick={handleAddLap} disabled={!isRunning}>
            Lap
          </Button>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
          <Button variant="outlined" onClick={handleSpeedUp} disabled={speedValue >= 2}>
            Faster
          </Button>
          <Typography variant="body1" sx={{ alignSelf: 'center' }}>
            Speed: {speedValue}x
          </Typography>
          <Button variant="outlined" onClick={handleSpeedDown} disabled={speedValue <= 0.5}>
            Slower
          </Button>
        </Box>

        {lapsList.length > 0 && (
          <Box sx={{ marginTop: 3 }}>
            <Typography variant="h6" gutterBottom>
              Laps:
            </Typography>
            <List>
              {lapsList.map((lapItem, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`Lap ${index + 1}: ${getTimeText(lapItem)}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Box>
  )
}

export default Stopwatch
