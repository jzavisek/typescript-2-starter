const gulp = require('gulp')
const mocha = require('gulp-spawn-mocha')
const typescript = require('gulp-tsc')

const tsConfig = {
  tscPath: './node_modules/.bin/tsc',
  sourcemap: true,
  module: 'commonjs',
  target: 'es6',
}

const srcPaths = [
  'src/**/*.ts', 
  'tests/**/*.ts',
]

gulp.task('watch', function () {
  gulp.watch('src/**/*.ts', ['compile'])
})

gulp.task('compile', function(){
  gulp.src(srcPaths)
    .pipe(typescript(tsConfig))
    .pipe(gulp.dest('dist'))
})

gulp.task('test', () =>
  gulp.src('dist/tests/**/*.js', { read: false })
    .pipe(mocha({
      cwd: 'dist',
      env: { NODE_ENV: 'test' }
    }))
)
