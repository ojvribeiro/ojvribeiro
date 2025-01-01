<script>
  import { ref, onMounted, onUnmounted } from 'vue'

  export default {
    setup() {
      const canvasRef = ref(null)
      let ctx, w, h
      let particles = []
      const probability = 0.04
      let xPoint, yPoint

      function resizeCanvas() {
        if (canvasRef.value) {
          w = canvasRef.value.width = window.innerWidth
          h = canvasRef.value.height = window.innerHeight
        }
      }

      function updateWorld() {
        update()
        paint()
        requestAnimationFrame(updateWorld)
      }

      function update() {
        if (particles.length < 500 && Math.random() < probability) {
          createFirework()
        }
        particles = particles.filter(particle => particle.move())
      }

      function paint() {
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = 'rgba(0,0,0,0.2)'
        ctx.fillRect(0, 0, w, h)
        ctx.globalCompositeOperation = 'lighter'
        particles.forEach(particle => particle.draw(ctx))
      }

      function createFirework() {
        xPoint = Math.random() * (w - 200) + 100
        yPoint = Math.random() * (h - 200) + 100
        const nFire = Math.random() * 50 + 100
        const color =
          'rgb(' +
          ~~(Math.random() * 200 + 55) +
          ',' +
          ~~(Math.random() * 200 + 55) +
          ',' +
          ~~(Math.random() * 200 + 55) +
          ')'
        for (let i = 0; i < nFire; i++) {
          const particle = new Particle(color)
          const vy = Math.sqrt(25 - particle.vx * particle.vx)
          if (Math.abs(particle.vy) > vy) {
            particle.vy = particle.vy > 0 ? vy : -vy
          }
          particles.push(particle)
        }
      }

      class Particle {
        constructor(color) {
          this.w = this.h = Math.random() * 2 + 1
          this.x = xPoint - this.w / 2
          this.y = yPoint - this.h / 2
          this.vx = (Math.random() - 0.5) * 10
          this.vy = (Math.random() - 0.5) * 10
          this.alpha = Math.random() * 0.5 + 0.5
          this.color = color
          this.gravity = 0.08
        }

        move() {
          this.x += this.vx
          this.vy += this.gravity
          this.y += this.vy
          this.alpha -= 0.01
          return this.x > -this.w && this.x < w && this.y < h && this.alpha > 0
        }

        draw(c) {
          c.save()
          c.beginPath()
          c.translate(this.x + this.w / 2, this.y + this.h / 2)
          c.arc(0, 0, this.w, 0, Math.PI * 2)
          c.fillStyle = this.color
          c.globalAlpha = this.alpha
          c.closePath()
          c.fill()
          c.restore()
        }
      }

      onMounted(() => {
        const canvas = canvasRef.value
        ctx = canvas.getContext('2d')
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas, false)
        requestAnimationFrame(updateWorld)
      })

      onUnmounted(() => {
        window.removeEventListener('resize', resizeCanvas)
      })

      return {
        canvasRef,
      }
    },
  }
</script>

<template>
  <canvas ref="canvasRef" id="canvas"></canvas>
</template>

<style>
  canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>
