<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'

  const { width, height } = useWindowSize()

  const canvas = ref<HTMLCanvasElement | null>(null)
  const ctx = ref<CanvasRenderingContext2D | null>(null)

  const particleSpawnProbability: number = 0.04

  let particles: Particle[] = []
  const currentXPoint = ref<number>()
  const currentYPoint = ref<number>()

  function updateWorld() {
    update()
    paint()
    requestAnimationFrame(updateWorld)
  }

  function update() {
    if (particles.length < 500 && Math.random() < particleSpawnProbability) {
      createFirework()
    }

    particles = particles.filter(particle => particle.move())
  }

  function paint() {
    ctx.value.globalCompositeOperation = 'destination-out'
    ctx.value.fillStyle = 'rgba(0,0,0,0.15)'
    ctx.value.fillRect(0, 0, width.value, height.value)
    ctx.value.globalCompositeOperation = 'lighter'
    particles.forEach(particle => particle.draw(ctx.value))
  }

  async function createFirework() {
    const fireCount = Math.random() * 50 + 100

    const getRandomColor = () => ~~(Math.random() * 255 + 100)

    const color: string = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`

    currentXPoint.value = Math.random() * (width.value - 200) + 100
    currentYPoint.value = Math.random() * (height.value - 200) + 100

    for (let i = 0; i < fireCount; i++) {
      const particle = new Particle(color)

      const velocityYLimit = Math.sqrt(
        25 - particle.velocityX * particle.velocityX
      )

      if (Math.abs(particle.velocityY) > velocityYLimit) {
        particle.velocityY =
          particle.velocityY > 0 ? velocityYLimit : -velocityYLimit
      }

      particles.push(particle)
    }
  }

  class Particle {
    width: number
    height: number
    x: number
    y: number
    velocityX: number
    velocityY: number
    alpha: number
    color: string
    gravity: number

    constructor(color: string) {
      const particleSize = 2

      this.width = this.height = Math.random() * particleSize + 1
      this.x = currentXPoint.value - this.width / 2
      this.y = currentYPoint.value - this.height / 2
      this.velocityX = (Math.random() - 0.5) * 10
      this.velocityY = (Math.random() - 0.5) * 10
      this.alpha = Math.random() * 0.5 + 0.5
      this.color = color
      this.gravity = 0.08
    }

    move(): boolean {
      this.x += this.velocityX
      this.velocityY += this.gravity
      this.y += this.velocityY
      this.alpha -= 0.01

      return (
        this.x > -this.width &&
        this.x < width.value &&
        this.y < height.value &&
        this.alpha > 0
      )
    }

    draw(c: CanvasRenderingContext2D) {
      c.save()
      c.beginPath()
      c.translate(this.x + this.width / 2, this.y + this.height / 2)
      c.arc(0, 0, this.width, 0, Math.PI * 2)
      c.fillStyle = this.color
      c.globalAlpha = this.alpha
      c.closePath()
      c.fill()
      c.restore()
    }
  }

  watchEffect(() => {
    if (canvas.value) {
      ctx.value = canvas.value.getContext('2d')
      canvas.value.width = width.value
      canvas.value.height = height.value
    }
  })

  onMounted(async () => {
    if (canvas.value) {
      ctx.value = canvas.value.getContext('2d')
      canvas.value.width = width.value
      canvas.value.height = height.value
    }

    updateWorld()
  })
</script>

<template>
  <canvas ref="canvas" class="absolute left-0 top-0 z-[-1]" />
</template>
