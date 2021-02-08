export default class BLEDevice {
    device = undefined
    deviceId = undefined
    disconnectCallback = undefined

    constructor (device) {
      this.device = device
      this.deviceId = this.device.id
    }

    static async scan (deviceName, searchTime) {
      return new Promise((resolve, reject) => {
        const devices = []
        window.ble.startScan([], (deviceFound) => {
          if (deviceFound.name === deviceName) devices.push(deviceFound)
        }, (failureResponse) => {
          console.log('Start scan failed.', failureResponse)
          reject()
        })
        setTimeout(() => {
          window.ble.stopScan((success) => {
            resolve(devices)
          }, (failureResponse) => {
            console.log('Stop scan failed.', failureResponse)
            resolve()
          })
        }, searchTime)
      })
    }

    async connect () {
      return new Promise((resolve, reject) => {
        this.disconnectCallback = reject
        window.ble.connect(
          this.deviceId,
          success => {
            resolve(success)
          },
          failureResponse => {
            console.error('Connect failed.', failureResponse)
            if (this.disconnectCallback) this.disconnectCallback(failureResponse)
          }
        )
      })
    }
    async disconnect () {
      if (this.deviceId === null || this.deviceId === undefined) {
        return Promise.resolve()
      } else {
        return new Promise((resolve, reject) => {
          window.ble.disconnect(
            this.deviceId,
            success => {
              console.log('Disconnect succeded.')
              resolve(success)
            },
            failureResponse => {
              console.log('Disconnect failed.', failureResponse)
              reject(failureResponse)
            }
          )
        })
      }
    }
    async isConnected () {
      if (!this.deviceId) return Promise.resolve(false)
      return new Promise((resolve, reject) => {
        window.ble.isConnected(
          this.deviceId,
          success => {
            console.log('IsConnected succeeded.')
            resolve(true)
          },
          failure => {
            console.log('IsConnected failed.', failure)
            resolve(false)
          }
        )
      })
    }
    async writeWithoutResponse (data) {
      return new Promise((resolve, reject) => {
        window.ble.writeWithoutResponse(
          this.deviceId,
          this.SERVICE_UUID,
          this.WRITE_CHAR_UUID,
          data.buffer,
          successResponse => {
            console.log('Write without response succeeded.')
            resolve(successResponse)
          },
          failureResponse => {
            console.log('Write without response failed.')
            reject(failureResponse)
          }
        )
      })
    }
}